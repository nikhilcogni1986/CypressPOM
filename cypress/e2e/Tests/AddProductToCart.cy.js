///<reference types ="cypress"/>

import LandingPage from "../../support/PageObjects/LandingPage";
import LoginPage from "../../support/PageObjects/LoginPage";
import MP3PlayerPage from "../../support/PageObjects/MP3PlayerPage.js";

describe("Login to Ecommerce App", ()=>{

    const loginPage = new LoginPage();
    const landingPage = new LandingPage();
    const Mp3Page = new MP3PlayerPage();

    it("Login to App with Valid Credentials", ()=>
    {
        let productName = "iPod Classic";
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        loginPage.elements.lblNewCustomer().should('be.visible');
        loginPage.loginToApplication("nikhilrao@test.com","Password1234");

        landingPage.navigateToProductPage("MP3 Players","Show All MP3 Players");
        Mp3Page.addProductToCart(productName);

        landingPage.elements.btnCart().click();
        landingPage.verifyProductInCart(productName);
        landingPage.elements.btnViewCart().click();

        cy.url().should('include','?route=checkout/cart');
        

    }); 
});