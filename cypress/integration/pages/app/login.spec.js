describe('/pages/app/login/', () => {
  it('preencha os campos e vá para a página /app/perfil/', () => {
    cy.visit('/app/login/')

    cy.get('[data-cy="login-usuario"]').type('fernandogot')
    cy.get('[data-cy="login-senha"]').type('senhasegura')
    cy.get('[data-cy="login-button-signin"]').click()

    cy.url().should('include', '/app/profile/')
  })
})
