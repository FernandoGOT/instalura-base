import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject'

describe('/pages/app/login/', () => {
  describe('when fill and submit a form login request', () => {
    it('go to the profile page', () => {
      // Pré Teste
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login').as('userLogin')

      // Cenário
      const loginScreen = new LoginScreenPageObject(cy)
      loginScreen.fillLoginForm({ user: 'omariosouto', password: 'senhasegura' }).submitLoginForm()

      // Asserções
      cy.url().should('include', '/app/profile/')

      cy.wait('@userLogin').then((intercept) => {
        const { token } = intercept.response.body.data

        cy.getCookie('APP_TOKEN').should('exist')
        cy.getCookie('APP_TOKEN').should('have.property', 'value', token)
      })
    })
  })
})
