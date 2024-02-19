function parseHTML(htmlString, sourceUrl) {
  let parseResult = new DOMParser().parseFromString(htmlString, "text/html")
  if(sourceUrl){
    let baseEl = document.createElement("base")
    baseEl.href = sourceUrl
    parseResult.head.append(baseEl)
  }
  return {window: {document: parseResult}};
}

async function fetchUrl(url) {
  let res = await fetch(url)
  if(!res.ok) {
    throw new Error(`Network error requesting ${url} : ${res.status} ${res.statusText}`)
  }

  let contentType = res.headers.get("Content-Type")
  if(!contentType.startsWith("text/html")) {
    throw new Error(`Received document with type ${contentType} from ${url} expected text/html`)
  }

  return parseHTML(await res.text(), url)
}

export function JSDOM(htmlString) {
  return parseHTML(htmlString)
}

JSDOM.fromURL = fetchUrl
JSDOM.fromFile = fetchUrl