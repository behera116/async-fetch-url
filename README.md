# async-fetch-url
async/await implementation of fetchUrl function of fetch package.

## Install

    npm install async-fetch-url

## Basic implementation

```js
const fetchUrl = require('async-fetch-url').asyncFetchUrl;
( async() => {
    var url = "https://www.thehindu.com/";
    var response = await fetchUrl(url);
    console.log(JSON.stringify(response));

})();
```

Output format:

```javascript
{
    'error': Object,//error.message to get error info
    'meta': Object,
    'data': String //html content of the page
}

```
---
