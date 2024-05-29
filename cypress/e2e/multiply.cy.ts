/// <reference types="cypress" />

describe('multiply', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should multiply 5 * 5', () => {
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5')
    cy.get('button').contains('x').click();
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5')
    cy.get('button').contains('=').click();

    cy.get('.display-container > div').should('have.text', '25')
  });

  it('should multiply -10 * -5', () => {
    cy.get('button').contains('-').click();
    cy.get('button').contains('1').click();
    cy.get('.display-container > div').should('have.text', '1');
    cy.get('button').contains('0').click();
    cy.get('.display-container > div').should('have.text', '10');
    cy.get('button').contains('x').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '50');
  });

  it('should multiply 2.8 * 1.5', () => {
    cy.get('button').contains('2').click();
    cy.get('.display-container > div').should('have.text', '2');
    cy.get('button').contains('.').click();
    cy.get('.display-container > div').should('have.text', '2.');
    cy.get('button').contains('8').click();
    cy.get('.display-container > div').should('have.text', '2.8');
    cy.get('button').contains('x').click();
    cy.get('button').contains('1').click();
    cy.get('.display-container > div').should('have.text', '1');
    cy.get('button').contains('.').click();
    cy.get('.display-container > div').should('have.text', '1.');
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '1.5');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').invoke('text').then((number) => {
      expect(parseFloat(number)).to.be.closeTo(4.2, 1e-7);
    });
  });

  it('it should not multiply nothing', () => {
    cy.get('button').contains('x').click();
    cy.get('.display-container > div').should('have.text', '0');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '0');
  });
});
