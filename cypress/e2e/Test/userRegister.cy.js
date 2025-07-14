/// <reference types="cypress" />


context('Register', () => {
  

  it('Basarili kullanici olusturma', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm'); //urle gider

    cy.get('[href*="register.htm"]').click(); //register'a tıklar //*= -->

    //form doldurulur
    cy.get('[id="customer.firstName"]').type('testUser');
    cy.get('[id="customer.lastName"]').type('test');
    cy.get('[id="customer.address.street"]').type('user');
    cy.get('[id="customer.address.city"]').type('xx');
    cy.get('[id="customer.address.state"]').type('yy');
    cy.get('[id="customer.address.zipCode"]').type('nb');
    cy.get('[id="customer.phoneNumber"]').type('abc');
    cy.get('[id="customer.ssn"]').type('testUser');
    cy.get('[id="customer.username"]').type('testUser9');
    cy.get('[id="customer.password"]').type('testUser');
    cy.get('[id="repeatedPassword"]').type('testUser');

    //register butonuna tıklar.
    cy.get('[value="Register"]').click();

    //başarılı şekilde register olduğunu kontrol eder.
    cy.get('[id="leftPanel"] p').should('have.text','Welcome testUser test');
  })
  
})
