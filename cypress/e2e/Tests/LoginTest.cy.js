///<reference types ="cypress"/>

import LoginPage from "../../support/PageObjects/LoginPage";

describe("Login to Ecommerce App", ()=>{

    const loginPage = new LoginPage();

    before(()=>{
        cy.fixture('Login').then(data=>{
            globalThis.loginData = data;
        })
    })
    
    it("Login to App with Valid Credentials", ()=>
    {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        loginPage.
                elements.
                lblNewCustomer().
                should('be.visible');
        loginPage.
                loginToApplication(globalThis.loginData[0].username,
                                  globalThis.loginData[0].password);
        loginPage.logout();
    }); 

    it("Login to App with Invalid Credentials", ()=>
    {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        loginPage.
                elements.
                lblNewCustomer().
                should('be.visible');
        loginPage.
                loginToApplication(globalThis.loginData[1].InvalidUsername,
                                  globalThis.loginData[1].InvalidPassword);
        loginPage.
                elements.alrtErrorMsg()
                .should('be.visible');
    });
});