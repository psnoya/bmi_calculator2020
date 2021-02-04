/// <reference types="Cypress" /> 

describe('BMI Calculator', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Calculates BMI in metric',() => {
        cy.get('select#select-method').select('metric');
        cy.get('input#weight').type(90);
        cy.get('input#height').type(190);
        cy.get('button#calculate').click();
        cy.get('p#bmi-message').should('contain', 'You should Take a shot');
    });

    it('Calculates BMI in imperial',() => {
        cy.get('select#select-method').select('imperial');
        cy.get('input#weight').type(198);
        cy.get('input#height').type(74);
        cy.get('button#calculate').click();
        cy.get('p#bmi-message').should('contain', 'You are Overweight with BMI of 25.42');
    });
});

