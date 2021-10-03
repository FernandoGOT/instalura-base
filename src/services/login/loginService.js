import { setCookie, destroyCookie } from 'nookies'

import isStagingEnv from '../../infra/env/isStagingEnv'

const HttpClient = (url, { headers, body, ...options }) =>
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body),
    ...options
  }).then((respostaDoServer) => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json()
    }

    throw new Error('Falha em pegar os dados do servidor')
  })

const BASE_URL = isStagingEnv
  ? // Back End de DEV
    'https://instalura-api-git-master-omariosouto.vercel.app'
  : // Back End de PROD
    'https://instalura-api-omariosouto.vercel.app'

const loginService = {
  login: async ({ username, password }) =>
    HttpClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username,
        password
      }
    }).then((respostaConvertida) => {
      // Salvar o token
      const { token } = respostaConvertida.data
      setCookie(null, 'APP_TOKEN', token, {
        path: '/',
        maxAge: 7 * 24 * 60 * 60 // 7 days
      })

      return respostaConvertida
    }),
  logout: () => destroyCookie(null, 'APP_TOKEN')
}

export default loginService
