/// <reference types="cypress" />

describe('API Testleri - bodyPayload & headersPayload kullanımı', () => {

  const headersPayload = {
    'Content-Type': 'application/json'
  };

  const email = `yeni.kullanici.${Date.now()}@mail.com`;

  it('POST - https://automationexercise.com/api/signup', () => {
    const bodyPayload = {
      name: 'Yeni Kullanici',
      email: email,
      password: '123456'
    };

    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/signup',
      headers: headersPayload,
      body: bodyPayload,
      failOnStatusCode: false
    }).then((res) => {
      cy.log(res.status);
      expect(res.status).to.eq(200);
    });
  });

  it('POST - https://automationexercise.com/api/login', () => {
    const bodyPayload = {
      email: email,
      password: '123456'
    };

    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/login',
      headers: headersPayload,
      body: bodyPayload,
      failOnStatusCode: false
    }).then((res) => {
      cy.log(res.status);
      expect(res.status).to.eq(200);
    });
  });

  it('GET - https://automationexercise.com/api/users', () => {
    cy.request({
      method: 'GET',
      url: 'https://automationexercise.com/api/users',
      headers: headersPayload,
      failOnStatusCode: false
    }).then((res) => {
      cy.log(res.status);
      expect(res.status).to.eq(200);
    });
  });

  it('PUT - https://automationexercise.com/api/users/1', () => {
    const bodyPayload = {
      name: 'Guncellenmis Kullanici',
      email: email
    };

    cy.request({
      method: 'PUT',
      url: 'https://automationexercise.com/api/users/1',
      headers: headersPayload,
      body: bodyPayload,
      failOnStatusCode: false
    }).then((res) => {
      cy.log(res.status);
      expect(res.status).to.eq(200);
    });
  });

  it('DELETE - https://automationexercise.com/api/users/1', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://automationexercise.com/api/users/1',
      headers: headersPayload,
      failOnStatusCode: false
    }).then((res) => {
      cy.log(res.status);
      expect(res.status).to.eq(200);
    });
  });

  it('GET - https://automationexercise.com/api/logout', () => {
    cy.request({
      method: 'GET',
      url: 'https://automationexercise.com/api/logout',
      headers: headersPayload,
      failOnStatusCode: false
    }).then((res) => {
      cy.log(res.status);
      expect(res.status).to.eq(200);
    });
  });

});