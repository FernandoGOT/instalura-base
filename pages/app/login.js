import React from 'react'

import Logo from '../../src/theme/Logo'
import Link from '../../src/components/commons/Link'
import Text from '../../src/components/foundation/Text'
import Button from '../../src/components/commons/Button'
import Box from '../../src/components/foundation/layout/Box'
import TextField from '../../src/components/forms/TextField'
import Grid from '../../src/components/foundation/layout/Grid'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'
import { WebsitePageContext } from '../../src/components/wrappers/WebsitePage'

const LoginForm = () => (
  <form id="formCadastro" action="/app/profile">
    <TextField placeholder="Usuário" name="usuario" data-cy="login-usuario" />
    <TextField placeholder="Senha" name="senha" type="password" data-cy="login-senha" />

    <Button
      type="submit"
      data-cy="login-button-signin"
      variant="primary.main"
      margin={{
        xs: '0 auto',
        md: 'initial'
      }}
      fullWidth
    >
      Entrar
    </Button>
  </form>
)

// Essa página e desafio, e vamos dar pronto no próximo módulo o 04
const LoginScreen = () => {
  const websitePageContext = React.useContext(WebsitePageContext)

  return (
    <Grid.Container display="flex" flex="1" alignItems="center">
      <Grid.Row flex="1" alignItems="center" justifyContent="center">
        <Grid.Col
          display="flex"
          flexDirection="column"
          justifyContent="center"
          offset={{ lg: 2 }}
          value={{ xs: 12, md: 6, lg: 4 }}
          flex={1}
        >
          <Box display="flex" alignItems="center" justifyContent="center" marginTop="37px" marginBottom="37px">
            <Link href="/" color="secondary.main">
              <Logo size="large" />
            </Link>
          </Box>
          <LoginForm />
          <Text variant="paragraph1" tag="p" color="tertiary.light" textAlign="center">
            {'Não tem uma conta? '}
            <Link
              href="/"
              color="secondary.main"
              onClick={(event) => {
                event.preventDefault()
                websitePageContext.toggleModalCadastro()
              }}
            >
              Cadastre-se
            </Link>
          </Text>
        </Grid.Col>

        <Grid.Col value={{ xs: 12, md: 6 }}>
          <Box display="flex" justifyContent="center">
            <img
              align="center"
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Telefones mostrando as páginas internas do app"
            />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  )
}

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login'
    },
    menuProps: {
      display: false
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right'
    }
  }
})
