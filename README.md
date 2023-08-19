# rdfa-jsonld

A jsonld.js RDFa parser . Fork of [jsonld-rdfa-parser](https://github.com/science-periodicals/jsonld-rdfa-parser) with updated jsonld.js compatibility and ready-to-use esm browser bundle

Works in Node.js and the browser.

# Browser Quick Start

RDFa parser must be register with [jsonld.js](https://github.com/digitalbazaar/jsonld.js). 
Once registered, `jsonld.fromRDF` can be used and take for input a DOM element.

Put `dist/browser/index.esm.js` as `rdfa-jsonld.esm.js` and `jsonld.esm.min.js` from [jsonld.js](https://github.com/digitalbazaar/jsonld.js) in your project directory.

Use the following code to parse RDFa from the current page.
```js
import "./jsonld.esm.js"
import jsonldRdfaParser from './index.esm.js';

// register the parser for content type text/html
jsonld.registerRDFParser('text/html', jsonldRdfaParser);

// Parse RDFa from a DOM element
jsonld.fromRDF(document.documentElement, {format: 'text/html'})
    .then((json) => {
        console.log(json)
    });
```

# Nodejs Quick Start

RDFa parser must be register with [jsonld.js](https://github.com/digitalbazaar/jsonld.js). 
Once registered, `jsonld.fromRDF` can be used and take for input either a JSDOM element or a file path, a URL or a HTML string.

Add `jsonld` and `rdfa-jsonld` to your package.json project

```sh-session
npm install --save jsonld rdfa-jsonld
```

Use the following code to parse RDFa from a file named `test.html`.
```js
import jsonldRdfaParser from 'rdfa-jsonld';
import jsonld from 'jsonld';

// register the parser for content type text/html
jsonld.registerRDFParser('text/html', jsonldRdfaParser);

// Parse RDFa from a DOM element
jsonld.fromRDF('test.html', {format: 'text/html'})
    .then((json) => {
        console.log(json)
    });
```

## Examples

See examples in `example` folder for more use cases

---

Note the interesting code of this library is mostly taken from the
[jsonld.js](https://github.com/digitalbazaar/jsonld.js) library but
updated to the latest graph-rdfa-processor API. Credits are due to the
original authors.
