/// <reference types="cypress" />

import BaseLibrary from "../base/BaseLibrary";
import HomePage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";

context('Test', () => {

  const baseLibrary = new BaseLibrary();
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  it('Basarili Kullanici Girişi Senaryosu', () => {
    cy.visit('https://automationexercise.com/login');
    loginPage.enterEmail('testcypress@example.com');
    loginPage.enterPassword('123456');
    loginPage.clickLogin();
    homePage.verifyLoggedInAsUser('Burçak');
    cy.url().should('eq', 'https://automationexercise.com/');
  });

  it('Geçersiz Şifre ile Basarisiz Kullanici Girişi Senaryosu', () => {
    cy.visit('https://automationexercise.com/login');
    loginPage.enterEmail('testcypress@example.com');
    loginPage.enterPassword('yanlisSifre');
    loginPage.clickLogin();
  });

  it('Basarisiz Kullanici Girisi ', () => {

    cy.visit('https://automationexercise.com/login');
    loginPage.clickLogin();
  });

  it('Kaydolma Zorunlu', () => {

    cy.visit('https://automationexercise.com/login');
    loginPage.clickSignupButton();
    cy.url().should('include', '/login');
    loginPage.enterSignupName('Yeni Kullanıcı');
    loginPage.clickSignupButton();
    cy.url().should('include', '/login');
    const uniqueEmail = `yeni.kullanici.${Date.now()}@mail.com`;
    loginPage.enterSignupEmail(uniqueEmail);
    loginPage.clickSignupButton();
    cy.contains('Enter Account Information').should('be.visible');
    cy.url().should('include', '/signup');
  });

})