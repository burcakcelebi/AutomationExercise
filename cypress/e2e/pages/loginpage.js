// cypress/e2e/pages/LoginPage.js

class LoginPage {
  enterEmail(email) {
    cy.get('input[data-qa="login-email"]')
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type(email);
  }

  enterPassword(password) {
    cy.get('input[data-qa="login-password"]')
      .should('be.visible')
      .and('not.be.disabled')
      .clear()
      .type(password);
  }

  clickLogin() {
    cy.get('button[data-qa="login-button"]')
      .should('be.visible')
      .click();
  }

  clickSignupButton() {
    cy.get('button[data-qa="signup-button"]')
      .should('be.visible')
      .click();
  }

  enterSignupName(name) {
    cy.get('input[data-qa="signup-name"]')
      .should('be.visible')
      .clear()
      .type(name);
  }

  enterSignupEmail(email) {
    cy.get('input[data-qa="signup-email"]')
      .should('be.visible')
      .clear()
      .type(email);
  }
}

export default LoginPage;