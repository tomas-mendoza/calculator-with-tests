/// <reference types="cypress" />

describe('equal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should equal 5', () => {
    cy.get('button').contains('5').click();
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '5')
  });

  it('should equal -5', () => {
    cy.get('button').contains('-').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '-5')
  });

  it('should equal 2.8', () => {
    cy.get('button').contains('2').click();
    cy.get('.display-container > div').should('have.text', '2')
    cy.get('button').contains('.').click();
    cy.get('.display-container > div').should('have.text', '2.')
    cy.get('button').contains('8').click();
    cy.get('.display-container > div').should('have.text', '2.8')
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '2.8')
  });
});
