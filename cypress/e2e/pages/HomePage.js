// cypress/pages/HomePage.js

class HomePage {
  verifyLoggedInAsUser(username) {
    // "Logged in as Burçak" yazısını içeriyor mu diye kontrol eder
    cy.contains(`Logged in as ${username}`).should('be.visible');
  }
}

export default HomePage;