/* global cy */
describe ('Contact Home', ()=>{
    it('Frontpage can be opened', ()=>{
        cy.visit('http://localhost:3000')
        cy.contains('Name')  
    })

    it('Validating field empty', ()=>{
        cy.get('[placeholder="Name"]').should('have.value', '');
        cy.get('[placeholder="Address"]').should('have.value', '')
        cy.get('[placeholder="Phone"]').should('have.value', '')
        cy.get('[placeholder="Email"]').should('have.value', '')
        cy.get('#button-submit').click();
        cy.get('.form-control.generic-table.error-class').should('be.visible');

    })

    it('Validating email', ()=>{
        cy.get('[placeholder="Name"]').type('Prueba')
        cy.get('[placeholder="Address"]').type('Prueba2')
        cy.get('[placeholder="Phone"]').type('555555555')
        cy.get('[placeholder="Email"]').type('test')
        cy.get('#button-submit').click();
        cy.get('.form-control.generic-table.error-class').should('be.visible');

    })

    it('Validating SAVE', ()=>{
        cy.get('[placeholder="Name"]').type('Prueba')
        cy.get('[placeholder="Address"]').type('Prueba2')
        cy.get('[placeholder="Phone"]').type('555555555')
        cy.get('[placeholder="Email"]').type('ebutrera@uci.cu')
        cy.get('#button-submit').click();
        cy.contains('Prueba')  
    }) 

    it('Validating SEARCH', ()=>{
        cy.get('input').first().type('Prueba')
        cy.contains('Prueba')
    })   

    it('Validating DELETE', ()=>{
        cy.contains('Remove').click();  
        cy.contains(`Yes, I'm!`).click();  
    })   
  
})