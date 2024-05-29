/// <reference types="cypress" />

describe('subtract', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should subtract 5 - 5', () => {
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5')
    cy.get('button').contains('-').click();
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5')
    cy.get('button').contains('=').click();

    cy.get('.display-container > div').should('have.text', '0')
  });

  it('should subtract -10 - -5', () => {
    cy.get('button').contains('-').click();
    cy.get('button').contains('1').click();
    cy.get('.display-container > div').should('have.text', '1');
    cy.get('button').contains('0').click();
    cy.get('.display-container > div').should('have.text', '10');
    cy.get('button').contains('-').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '5');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').should('have.text', '-5');
  });

  it('should subtract 2.8 - 1.5', () => {
    cy.get('button').contains('2').click();
    cy.get('.display-container > div').should('have.text', '2');
    cy.get('button').contains('.').click();
    cy.get('.display-container > div').should('have.text', '2.');
    cy.get('button').contains('8').click();
    cy.get('.display-container > div').should('have.text', '2.8');
    cy.get('button').contains('-').click();
    cy.get('button').contains('1').click();
    cy.get('.display-container > div').should('have.text', '1');
    cy.get('button').contains('.').click();
    cy.get('.display-container > div').should('have.text', '1.');
    cy.get('button').contains('5').click();
    cy.get('.display-container > div').should('have.text', '1.5');
    cy.get('button').contains('=').click();
    cy.get('.display-container > div').invoke('text').then((number) => {
      expect(parseFloat(number)).to.be.closeTo(1.3, 1e-7);
    });
  });

  it('it should not subtract nothing', () => {
    cy.get('button').contains('-').click();
    cy.get('.display-container > div').should('have.text', '0');
    cy.get('button').contains('AC').click();
    cy.get('.display-container > div').should('have.text', '0');
  });
});
