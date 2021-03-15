<div align="center">
  <h1>MyAnimeList</h2>
  <p>A simple wrapper for MyAnimeList api v2</p>
</div>

## Table of contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [Anime](#anime)
  - [Manga](#manga)
- [Example](#example)

## Installation

```bash
# with npm
$ npm install myanimelist.net

# or with Yarn
$ yarn add myanimelist.net
```

## Documentation

### Anime

#### getAnime(search, resultLimit)
Search anime by name

- `search` - string thath will be queried in the api _(Required)_
- `resultLimit` - amout of results _(Default value: 4)_

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

#### getAnimeById(id, fields)
Get anime by id

- `id` - anime id _(Required)_
- `fields` - an array that contains the returns fields _(Optional)_

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

#### getAnimeRanking(type, resultLimit)
Anime list by ranking

- `type` - anime type _(Required)_
   - types: ()
- `resultLimit` - amout of results _(Default value: 4)_

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

#### getAnimeBySuggestion(resultLimit)
Suggest anime

- `resultLimit` - amout of results _(Default value: 4)_

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

#### getAnimeBySeason(year, season, resultLimit)
Get seasonal anime

- `year` - anime year _(Required)_
- `season` - seasonal _(Required)_
  - seasons: ()
- `resultLimit` - amout of results _(Default value: 4)_

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

### Manga

#### getManga(search)
Search manga by name

- `search` - string that will be queried in the api _(Required)_

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

#### getMangaById(id, fields)
Get manga by id

- `id` - manga id _(Required)_
- `fields` - an array that contains the returns fields _(Optional)_

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

#### getMangaRanking(type, resultLimit)
Manga list by ranking

- `type` - manga type _(Required)_
- `resultLimit` - amout of results _(Default value: 4)_

>**Returns**: &nbsp;&nbsp; [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

## Example

```javascript
const MyAnimeList = require('myanimelist.net')
const mal = new MyAnimeList()

mal.getMangaById(2)
  .then(console.log)
  .catch(console.error)
```

#### Returns
```javascript
{
  "id": 2,
  "title": "Berserk",
  "main_picture": {
    "medium": "https:\/\/api-cdn.myanimelist.net\/images\/manga\/1\/157931.jpg",
    "large": "https:\/\/api-cdn.myanimelist.net\/images\/manga\/1\/157931l.jpg"
  }
}
```
