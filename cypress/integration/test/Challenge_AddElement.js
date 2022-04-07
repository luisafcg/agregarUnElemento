/// <reference types = "Cypress" />

describe ('In this file I am doing my first challenge', () =>{
    beforeEach (()=>{
        cy .visit ('https://demoqa.com/webtables')
    })
    it('Add new element', () =>{
        cy.fixture('elementsWebTables').then((elements =>{
            cy.get(elements.btnAdd).should('be.visible').click()
        }))

        cy.fixture('dataForCreateElement').then((data =>{
        cy.addElement(data.FirstName,
            data.LastName,
            data.Email,
            data.Age,
            data.Salary,
            data.Department)
        }))

        cy.fixture('elementsWebTables').then((search =>{
            cy.get(search.elementSearch).type ('Fernanda').clear()
        }))

        
    })

    it ('I want to edit my Element', () =>{
        cy.get ('#edit-record-1').click()
        cy.fixture('dataForEditElement').then((edit =>{
            cy.addElement(edit.FirstName,
                edit.LastName,
                edit.Email,
                edit.Age,
                edit.Salary,
                edit.Department)
            }))
    })

    it.only ('I want to delete a user', () =>{
        cy.get('#delete-record-3').click()
        cy.get('.rt-tbody').should('not.contain.text', 'Kierra')
        
      
    })
       
})