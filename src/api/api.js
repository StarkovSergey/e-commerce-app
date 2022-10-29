import { API_URL } from '../config'

export const shopAPI = {
  getGoods() {
    return fetch(API_URL, {
      headers: {
        Authorization: '5f42d7ec-fb52be21-c7c6306d-7862a3ed'
      }
    }).then(response => response.json())
  }
}
