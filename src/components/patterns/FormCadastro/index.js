import React from 'react'
import { Lottie } from '@crello/react-lottie'

import Box from '../../layout/Box'
import Grid from '../../layout/Grid'
import Button from '../../commons/Button'
import Text from '../../foundation/Text'
import TextField from '../../forms/TextField'
import errorAnimation from './animations/error.json'
import successAnimation from './animations/success.json'

const formStates = {
  DONE: 'DONE',
  ERROR: 'ERROR',
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING'
}

const FormContent = () => {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false)
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT)
  const [userInfo, setUserInfo] = React.useState({
    usuario: 'fernandoGomes',
    nome: 'Fernando Gomes'
  })

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name')

    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsFormSubmited(true)
    setSubmissionStatus(formStates.LOADING)

    const userDTO = {
      username: userInfo.usuario,
      name: userInfo.nome
    }

    fetch('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userDTO)
    })
      .then((respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          return respostaDoServidor.json()
        }

        throw new Error('Não foi possível cadastrar o usuário agora: (')
      })
      .then((respostaConvertidaEmObjeto) => {
        setSubmissionStatus(formStates.DONE)
        console.log(respostaConvertidaEmObjeto)
      })
      .catch((error) => {
        setSubmissionStatus(formStates.ERROR)
        console.error(error)
      })
  }

  const isFormInvalid = userInfo.usuario.length === 0 || userInfo.nome.length === 0

  return (
    <form onSubmit={handleSubmit}>
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>
      <Text variant="paragraph1" tag="p" color="tertiary.light" marginBottom="32px">
        Você está a um passo de saber tudoo que está rolando no bairro, complete seu cadastro agora!
      </Text>
      <div>
        <TextField type="nome" placeholder="nome" name="nome" value={userInfo.nome} onChange={handleChange} />
      </div>
      <div>
        <TextField type="text" placeholder="Usuário" name="usuario" value={userInfo.usuario} onChange={handleChange} />
      </div>
      <Button type="submit" variant="primary.main" disabled={isFormInvalid || submissionStatus === formStates.LOADING} fullWidth>
        Cadastrar
      </Button>
      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box display="flex" justifyContent="center">
          <Lottie width="150px" height="150px" config={{ animationData: successAnimation, loop: false, autoplay: true }} />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box display="flex" justifyContent="center">
          <Lottie width="150px" height="150px" config={{ animationData: errorAnimation, loop: true, autoplay: true }} />
        </Box>
      )}
    </form>
  )
}

const FormCadastro = ({ propsDoModal }) => (
  <Grid.Row flex={1} marginLeft={0} marginRight={0} justifyContent="flex-end">
    <Grid.Col display="flex" paddingRight={{ md: '0' }} flex={0} value={{ xs: 12, md: 5, lg: 4 }}>
      <Box
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1}
        padding={{
          xs: '16px',
          md: '85px'
        }}
        backgroundColor="white"
        {...propsDoModal}
      >
        <FormContent />
      </Box>
    </Grid.Col>
  </Grid.Row>
)

export default FormCadastro
