// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands


// ***********************************************
import MP3PlayerPage from "../support/PageObjects/MP3PlayerPage.js";
const MP3Page = new MP3PlayerPage();

// -- This is a parent command --
Cypress.Commands.add('addProductToCart', (productToBeAddedToCart) => 
{
        MP3Page.elements.lnkHeaderLinks().each(($el,index,$list) =>{
        let productName = $el.text();
        cy.log(productName);
        if(productName === productToBeAddedToCart)
        {
            MP3Page.elements.btnAddToCart().eq(index).click({force:true});
            return;
        }
    })

    //Validate the success message once product is added to cart
    MP3Page.elements.alrtSuccessMsg().then((popmsg)=>{
        cy.log(popmsg.text());
        expect(popmsg.text()).to.include("Success: You have added");
    })
})
    
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