describe('/pages/app/login/', () => {
  it('preencha os campos e vá para a página /app/perfil/', () => {
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login').as('userLogin')
    cy.visit('/app/login/')

    cy.get('[data-cy="login-usuario"]').type('omariosouto')
    cy.get('[data-cy="login-senha"]').type('senhasegura')
    cy.get('[data-cy="login-button-signin"]').click()

    cy.url().should('include', '/app/profile/')

    cy.wait('@userLogin').then((intercept) => {
      const { token } = intercept.response.body.data

      cy.getCookie('APP_TOKEN').should('exist')
      cy.getCookie('APP_TOKEN').should('have.property', 'value', token)
    })
  })
})
