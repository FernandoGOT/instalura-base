class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy

    this.cy.visit('/app/login/')
  }

  fillLoginForm({ user, password }) {
    this.cy.get('[data-cy="login-usuario"]').type(user)
    this.cy.get('[data-cy="login-senha"]').type(password)

    return this
  }

  submitLoginForm() {
    this.cy.get('[data-cy="login-button-signin"]').click()

    return this
  }
}

export default LoginScreenPageObject
