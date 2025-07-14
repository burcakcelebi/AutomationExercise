/// <reference types="cypress" />


context('Login', () => {
  

  it('Basarili kullanici girisi', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm'); //urle gider
    cy.get('[name="username"]').type('ssomkan');
    cy.get('[name="password"]').type('serat123');
    cy.get('[value="Log In"]').click();
    cy.get('[id="leftPanel"] p').should('have.text','Welcome Serat Somkan');
  })

  it('Basarisiz kullanici girisi', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm'); //urle gider
    cy.get('[name="username"]').type('ssomkan');
    cy.get('[name="password"]').type('123');
    cy.get('[value="Log In"]').click();
    cy.get('[class="error"]').should('have.text','Please valid password');
  })

  it('Zorunlu alan kullanici girisi', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm'); //urle gider
    cy.get('[value="Log In"]').click();
    cy.get('[class="error"]').should('have.text','Please enter a username and password.');
    cy.get('[name="username"]').type('ssomkan');
    cy.get('[value="Log In"]').click();
    cy.get('[class="error"]').should('have.text','Please enter a username and password.');
    cy.get('[name="username"]').type('ssomkan');
    cy.get('[name="password"]').type('serat123');
    cy.get('[value="Log In"]').click();
    cy.get('[id="leftPanel"] p').should('have.text','Welcome Serat Somkan');
  })
  
})
