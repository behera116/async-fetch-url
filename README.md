# async-fetch-url
async/await implementation of fetchUrl function of fetch package.

## Install

    npm install async-fetch-url

## Fetch from url

`fetch.fetchUrl(url [, options])`

Where

  * **url** is the url to fetch
  * **options** is an optional options object

[Options param is same as fetch implementation](https://www.npmjs.com/package/fetch#options)

Possible options params
```javascript
{
    headers: {
        "X-My-Header": "Custom header",
        "User-Agent": "MyUseragent/1.0"
    },
    cookies: ["name=value", "key=value; path=/; secure"],
    maxRedirects: 100,//use `disableRedirects: true` to disable redirection, default maxRedirects is 10,
    disableGzip: true //default value is false. Gzip and Deflate is on
    
}

```

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
[Meta object details](https://www.npmjs.com/package/fetch#meta-object)

---
