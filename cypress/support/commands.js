// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add ('addElement', (name, lastName, email,age,salary,departament) =>{
    cy.fixture('elementsWebTables').then((elements =>{
    cy.get(elements.elementFirstName).clear().type (name)
    cy.get(elements.elementLastName).clear().type (lastName)
    cy.get(elements.elementEmail).clear().type (email)
    cy.get(elements.elementAge).clear ().type (age)
    cy.get(elements.elementSalary).clear().type (salary)
    cy.get(elements.elementDepartment).clear ().type (departament)
    cy.get(elements.btnSubmit).click()

}))
})