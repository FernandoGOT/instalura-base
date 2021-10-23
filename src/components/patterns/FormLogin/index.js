import * as yup from 'yup'
import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import Button from '../../commons/Button'
import TextField from '../../forms/TextField'
import { useForm } from '../../../infra/hooks/forms/useForm'
import loginService from '../../../services/login/loginService'

const loginSchema = yup.object().shape({
  usuario: yup.string().required('"Usuário" é obrigatório').min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup.string().required('"Senha" é obrigatória').min(8, 'Sua senha precisa ter ao menos 8 caracteres')
})

const FormLogin = ({ onSubmit }) => {
  const router = useRouter()
  const initialValues = {
    usuario: '',
    senha: ''
  }

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true)
      loginService
        .login({
          username: values.usuario,
          password: values.senha
        })
        .then(() => {
          router.push('/app/profile/')
        })
        .catch((err) => {
          // TODO: Exibir o erro na tela
          console.error(err)
        })
        .finally(() => {
          form.setIsFormDisabled(false)
        })
    },
    validateSchema: async (values) => loginSchema.validate(values, { abortEarly: false })
  })

  return (
    <form id="formCadastro" onSubmit={onSubmit || form.handleSubmit}>
      <TextField
        name="usuario"
        placeholder="Usuário"
        data-cy="login-usuario"
        onBlur={form.handleBlur}
        error={form.errors.usuario}
        value={form.values.usuario}
        onChange={form.handleChange}
        isTouched={form.touchedFields.usuario}
      />
      <TextField
        name="senha"
        type="password"
        placeholder="Senha"
        data-cy="login-senha"
        onBlur={form.handleBlur}
        error={form.errors.senha}
        value={form.values.senha}
        onChange={form.handleChange}
        isTouched={form.touchedFields.senha}
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
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
      <pre>{JSON.stringify(form.errors, null, 2)}</pre>
    </form>
  )
}

FormLogin.propTypes = {
  onSubmit: PropTypes.func
}

FormLogin.defaultProps = {
  onSubmit: () => {}
}

export default FormLogin
