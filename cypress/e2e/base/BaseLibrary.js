class BaseLibrary {
  visit(url = 'https://automationexercise.com') {
    cy.visit(url);
    return this;
  }

  click(selector) {
    cy.get(selector).click();
    return this;
  }

  type(selector, text) {
    cy.get(selector).type(text);
    return this;
  }

  shouldHaveText(selector, text) {
    cy.get(selector).should('have.text', text);
    return this;
  }

  shouldContainText(selector, text) {
    cy.get(selector).should('contain.text', text);
    return this;
  }

  shouldBeVisible(selector) {
    cy.get(selector).should('be.visible');
    return this;
  }
}

export default BaseLibrary;