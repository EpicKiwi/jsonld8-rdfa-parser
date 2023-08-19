import jsonld from "jsonld"
import jsonldRdfaParser from '../../dist/index.esm.js';
import {fileURLToPath} from "node:url"

jsonld.registerRDFParser('text/html', jsonldRdfaParser);

const documentPath = new URL("quick-start.html", import.meta.url.toString())

const frame = {
    "@context": {
        "@base": documentPath,
        "@language": "en",
        "@vocab": "http://xmlns.com/foaf/0.1/",
        "schema": "http://schema.org/",
        "description": "schema:description"
    },
    "@type": "Group",
    "member": {
        "@embed": "@always"
    }
}

jsonld.fromRDF(fileURLToPath(documentPath), {format: 'text/html'})
    .then((json) => {
        return jsonld.frame(json, frame)
    })
    .then((framedJson) => {
        console.log("Framed JsonLD")
        console.log(frame)
        console.log("\nResult :")
        console.log(framedJson)
    });