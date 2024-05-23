/// <reference types="cypress" />

describe('operators', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should sum 2 + 3', () => {
    cy.get('button').contains('2').click();
    cy.get('.display-container > div').should('have.text', '2')
    cy.get('button').contains('+').click();
    cy.get('button').contains('3').click();
    cy.get('.display-container > div').should('have.text', '3')
    cy.get('button').contains('=').click();

    cy.get('.display-container > div').should('have.text', '5')
  });

  it('should subtract 3 - 1', () => {
    cy.get('button').contains('3').click();
    cy.get('.display-container > div').should('have.text', '3');
    cy.get('button').contains('-').click();
    cy.get('button').contains('1').click();
    cy.get('.display-container > div').should('have.text', '1');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '2');
  });

  it('should multiply 5 * 0.5', () => {
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5');
    cy.get('button').contains('x').click();
    cy.get('button').contains('0').click();
    cy.get('.display-container > div').should('have.text', '0');
    cy.get('button').contains('.').click();
    cy.get('.display-container > div').should('have.text', '0.');
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '0.5');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '2.5');
  });
});