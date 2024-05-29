/// <reference types="cypress" />

describe('sum', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should sum 5 + 5', () => {
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5')
    cy.get('button').contains('+').click();
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5')
    cy.get('button').contains('=').click();

    cy.get('.display-container > div').should('have.text', '10')
  });

  it('should sum -10 + -5', () => {
    cy.get('button').contains('-').click();
    cy.get('button').contains('1').click();
    cy.get('.display-container > div').should('have.text', '1');
    cy.get('button').contains('0').click();
    cy.get('.display-container > div').should('have.text', '10');
    cy.get('button').contains('+').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '-15');
  });

  it('should sum 0.8 + 1.5', () => {
    cy.get('button').contains('0').click();
    cy.get('.display-container > div').should('have.text', '0');
    cy.get('button').contains('.').click();
    cy.get('.display-container > div').should('have.text', '0.');
    cy.get('button').contains('8').click();
    cy.get('.display-container > div').should('have.text', '0.8');
    cy.get('button').contains('+').click();
    cy.get('button').contains('1').click();
    cy.get('.display-container > div').should('have.text', '1');
    cy.get('button').contains('.').click();
    cy.get('.display-container > div').should('have.text', '1.');
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '1.5');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '2.3');
  });

  it('it should not sum nothing', () => {
    cy.get('button').contains('+').click();
    cy.get('.display-container > div').should('have.text', '0');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '0');
  });

  it('should sum .......5 + 5', () => {
    cy.get('button').contains('.').click().click().click().click().click().click();
    cy.get('.display-container > div').should('have.text', '......');
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '......5');
    cy.get('button').contains('+').click();
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '10');
  })
});
