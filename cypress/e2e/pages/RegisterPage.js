class RegisterPage {

  enterName(name) {
    cy.get('input[data-qa="signup-name"]').type(name);
    return this;
  }

  enterEmail(email) {
    cy.get('input[data-qa="signup-email"]').type(email);
    return this;
  }

  clickSignupButton() {
    cy.get('button[data-qa="signup-button"]').click();
    return this;
  }

  fillDetails({ title, password, day, month, year }) {
    if (title === 'Mr') {
      cy.get('#id_gender1').check();
    } else {
      cy.get('#id_gender2').check();
    }

    cy.get('#password').type(password);
    cy.get('#days').select(day);
    cy.get('#months').select(month);
    cy.get('#years').select(year);

    return this;
  }

  enterAddressInfo({ firstName, lastName, company, address1, address2, country, state, city, zipcode, mobile }) {
    cy.get('#first_name').type(firstName);
    cy.get('#last_name').type(lastName);
    cy.get('#company').type(company);
    cy.get('#address1').type(address1);
    cy.get('#address2').type(address2);
    cy.get('#country').select(country);
    cy.get('#state').type(state);
    cy.get('#city').type(city);
    cy.get('#zipcode').type(zipcode);
    cy.get('#mobile_number').type(mobile);

    return this;
  }

  clickCreateAccount() {
    cy.get('button[data-qa="create-account"]').click();
    return this;
  }

  verifyAccountCreated() {
    cy.contains('Account Created!').should('be.visible');
    return this;
  }

}

export default RegisterPage;