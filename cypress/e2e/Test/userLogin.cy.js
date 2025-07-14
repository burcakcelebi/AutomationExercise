/// <reference types="cypress" />


context('Login Testleri', () => {

  it('Basarili kullanici girisi', () => {
    cy.visit('https://automationexercise.com/login');

    cy.get('[data-qa="login-email"]').type('testcypress@example.com');
    cy.get('[data-qa="login-password"]').type('123456');
    cy.get('[data-qa="login-button"]').click();

    cy.contains('Logged in as').should('be.visible');
  })

  it('Basarisiz kullanici girisi', () => {
    cy.visit('https://automationexercise.com/login');

    cy.get('[data-qa="login-email"]').type('testcypress@example.com');
    cy.get('[data-qa="login-password"]').type('yanlisSifre');
    cy.get('[data-qa="login-button"]').click();

    cy.contains('Your email or password is incorrect!').should('be.visible');
  })

  it('Zorunlu kullanici girisi', () => {
    cy.visit('https://automationexercise.com/login');

    cy.get('[data-qa="signup-button"]').click();
    cy.url().should('include', '/login');
    cy.get('[data-qa="signup-name"]').type('Burçak');
    cy.get('[data-qa="signup-button"]').click();
    cy.url().should('include', '/login');
    const email = `burcak${Date.now()}@mail.com`;
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    cy.contains('Enter Account Information').should('be.visible');
  });

});
