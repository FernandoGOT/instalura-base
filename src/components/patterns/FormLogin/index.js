import React from 'react'
import { useRouter } from 'next/router'

import Button from '../../commons/Button'
import TextField from '../../forms/TextField'
import { useForm } from '../../../infra/hooks/forms/useForm'
import loginService from '../../../services/login/loginService'

const FormLogin = () => {
  const router = useRouter()
  const initialValues = {
    usuario: '',
    senha: ''
  }

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      loginService
        .login({
          username: values.usuario,
          password: values.senha
        })
        .then(() => {
          router.push('/app/profile/')
        })
    }
  })

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField name="usuario" placeholder="Usuário" data-cy="login-usuario" value={form.values.usuario} onChange={form.handleChange} />
      <TextField
        name="senha"
        type="password"
        placeholder="Senha"
        data-cy="login-senha"
        value={form.values.senha}
        onChange={form.handleChange}
      />

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
}

export default FormLogin
