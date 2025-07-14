/// <reference types="cypress" />


context('Register', () => {

  it('Basarili kullanici olusturma', () => {
    cy.visit('https://automationexercise.com/');

    cy.get('a[href="/login"]').click();
    cy.get('[data-qa="signup-name"]').type('Burçak');
    const email = `burcak${Date.now()}@mail.com`;
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.contains('Enter Account Information').should('be.visible');
    cy.get('#id_gender2').check();
    cy.get('#password').type('Burcak123!');
    cy.get('#days').select('17');
    cy.get('#months').select('April');
    cy.get('#years').select('2000');
    cy.get('#first_name').type('Burçak');
    cy.get('#last_name').type('Çelebi');
    cy.get('#company').type('Cypress Co.');
    cy.get('#address1').type('Test No:1');
    cy.get('#state').type('Ankara');
    cy.get('#city').type('Çankaya');
    cy.get('#zipcode').type('06000');
    cy.get('#mobile_number').type('05551234567');
    cy.get('[data-qa="create-account"]').click();
    cy.contains('Account Created!').should('be.visible');
  });
});
