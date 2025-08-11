import { UsersData } from "../support/types";



describe('sauce labs login scenarios', () => {

  // helpers

  const login = (user: { username: string, password: string }) => {
    cy.get('[data-test="username"]').type(user.username);
    cy.get('[data-test="password"]').type(user.password);
    cy.get('#login-button').click();
  }

  let users: UsersData;
  before(() => {
    cy.fixture<UsersData>('users').then((data) => {
      users = data;
    })
  })

  it('successful login', () => {
    cy.visit('/');
    login(users.validUser);
    cy.get('[data-test="username"]').should('not.exist');
    cy.url().should('include', '/inventory.html');
    cy.get('[data-test="title"]').should('have.text', 'Products');
  })

  it('successful fail due to incorrect password', () => {
    cy.visit('/');
    login(users.invalidUser);
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  })

  it('should display lock out message', () => {
    cy.visit('/');
    login(users.lockedUser);
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  })
})