/// <reference types="cypress" />

describe('divide', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should divide 5 / 5', () => {
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5')
    cy.get('button').contains('/').click();
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5')
    cy.get('button').contains('=').click();

    cy.get('.display-container > div').should('have.text', '1')
  });

  it('should divide -10 / -5', () => {
    cy.get('button').contains('-').click();
    cy.get('button').contains('1').click();
    cy.get('.display-container > div').should('have.text', '1');
    cy.get('button').contains('0').click();
    cy.get('.display-container > div').should('have.text', '10');
    cy.get('button').contains('/').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '2');
  });

  it('should divide 2.8 / 1.5', () => {
    cy.get('button').contains('2').click();
    cy.get('.display-container > div').should('have.text', '2');
    cy.get('button').contains('.').click();
    cy.get('.display-container > div').should('have.text', '2.');
    cy.get('button').contains('8').click();
    cy.get('.display-container > div').should('have.text', '2.8');
    cy.get('button').contains('/').click();
    cy.get('button').contains('1').click();
    cy.get('.display-container > div').should('have.text', '1');
    cy.get('button').contains('.').click();
    cy.get('.display-container > div').should('have.text', '1.');
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '1.5');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').invoke('text').then((number) => {
      expect(parseFloat(number)).to.be.closeTo(1.866666666666665, 1e-7);
    });
  });

  it('it should not divide nothing', () => {
    cy.get('button').contains('/').click();
    cy.get('.display-container > div').should('have.text', '0');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '0');
  });
});
