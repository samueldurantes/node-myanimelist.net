const fetch = require('node-fetch')

const API_URL = 'https://api.myanimelist.net/v2'

class MyAnimeList {
  /**
   * @param {string} token for authorization of requests
   */
  constructor (token) {
    if (typeof token !== 'string') {
      throw new TypeError('Token is not a string')
    }
    this.token = token
  }

  /**
   * Search anime by name
   * @param {string} search string that will be queried in the api
   * @param {number|string} resultLimit amount of results
   * @returns {Promise<Object>}
   */
  getAnime (search, resultLimit = 4) {
    return this._request(`/anime?q=${search}&limit=${resultLimit}`)
  }

  /**
   * Get anime by id
   * @param {number|string} id anime id
   * @param {string[]} fields an array that contains the returns fields
   * @returns {Promise<Object>}
   */
  getAnimeById (id, fields = []) {
    return this._request(`/anime/${id}?fields=${fields.join(',')}`)
  }

  /**
   * Anime list by ranking
   * @param {string} type anime types
   * @param {number|string} resultLimit amount of results
   * @returns {Promise<Object>}
   */
  getAnimeRanking (type, resultLimit = 4) {
    return this._request(`/anime/ranking?ranking_type=${type}&limit=${resultLimit}`)
  }

  /**
   * Suggest anime
   * @param {number|string} resultLimit amount of results
   * @returns {Promise<Object>}
   */
  getAnimeBySuggestion (resultLimit = 4) {
    return this._request(`/anime/suggestions?limit=${resultLimit}`)
  }

  /**
   * Get seasonal anime
   * @param {number|string} year anime year
   * @param {string} season seasonal
   * @param {number|string} resultLimit amount of results
   * @returns {Promise<Object>}
   */
  getAnimeBySeason (year, season, resultLimit = 4) {
    return this._request(`/anime/season/${year}/${season}?limit=${resultLimit}`)
  }

  /**
   * Search manga by name
   * @param {string} search string that will be queried in the api
   * @returns {Promise<Object>}
   */
  getManga (search) {
    return this._request(`/manga?q=${search}`)
  }

  /**
   * Get manga by id
   * @param {number|string} id manga id
   * @param {string[]} fields an array that contains the returns fields
   * @returns {Promise<Object>}
   */
  getMangaById (id, fields = []) {
    return this._request(`/manga/${id}?fields=${fields.join(',')}`)
  }

  /**
   * Manga list by ranking
   * @param {string} type manga types
   * @param {number|string} resultLimit amount of results
   * @returns {Promise<Object>}
   */
  getMangaRanking (type, resultLimit = 4) {
    return this._request(`/manga/ranking?ranking_type=${type}&limit=${resultLimit}`)
  }

  _request (endpoint) {
    return fetch(`${API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).then((response) => response.json())
  }
}

module.exports = MyAnimeList
