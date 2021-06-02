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

export const loginService = {
  login: async ({ username, password }) =>
    HttpClient('https://instalura-api-git-master-omariosouto.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username,
        password
      }
    }).then(
      (respostaConvertida) =>
        // Salvar o token
        respostaConvertida
    )
}

export default loginService
