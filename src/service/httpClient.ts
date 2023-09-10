import axios from 'axios'

export function HttpClient() {
  const api = axios.create({
    baseURL: 'https://challenge.solarpipe.com.br',
  })
  return api
}
