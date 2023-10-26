import axios from 'axios'
import { parseCookies } from 'nookies'

function getAPIClient() {
  const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333'

  const instance = axios.create({
    baseURL,
  })

  instance.interceptors.request.use(async (config) => {
    const { token } = parseCookies()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  return instance
}

export const api = getAPIClient()
