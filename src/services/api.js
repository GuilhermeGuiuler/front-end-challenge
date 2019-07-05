import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/'
})

export function userDetails(name) {
  return api.get(`users/${name}`)
}

export default api
