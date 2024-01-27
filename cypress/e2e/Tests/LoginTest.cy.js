///<reference types ="cypress"/>

import LoginPage from "../../support/PageObjects/LoginPage";

describe("Login to Ecommerce App", ()=>{

    const loginPage = new LoginPage();
    

    it("Login to App with Valid Credentials", ()=>
    {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        loginPage.elements.lblNewCustomer().should('be.visible');
        loginPage.loginToApplication("nikhilrao@test.com","Password1234");
        loginPage.logout();
    }); 

    it("Login to App with Invalid Credentials", ()=>
    {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        loginPage.elements.lblNewCustomer().should('be.visible');
        loginPage.loginToApplication("nikhilrao@test.com","Password12345");
        loginPage.elements.alrtErrorMsg().should('be.visible');
    });
});