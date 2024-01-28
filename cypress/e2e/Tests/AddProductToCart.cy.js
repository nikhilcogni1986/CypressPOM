///<reference types ="cypress"/>

import CartPage from "../../support/PageObjects/CartPage.js";
import CheckoutPage from "../../support/PageObjects/CheckoutPage.js";
import LandingPage from "../../support/PageObjects/LandingPage";
import LoginPage from "../../support/PageObjects/LoginPage";
import MP3PlayerPage from "../../support/PageObjects/MP3PlayerPage.js";

describe("Login to Ecommerce App", ()=>{

    const loginPage = new LoginPage();
    const landingPage = new LandingPage();
    const Mp3Page = new MP3PlayerPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();

    before(()=>
    {
        cy.fixture('Login').then(data=>{
            globalThis.loginData = data;
        });

        cy.fixture('productDetails').then(prodData=>{
            globalThis.productDetails = prodData;
        });    
    })

    it("Login to App with Valid Credentials", ()=>
    {

        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
        loginPage.
                elements.lblNewCustomer().should('be.visible');
        loginPage.
                loginToApplication(globalThis.loginData[0].username,
                                  globalThis.loginData[0].password);

        landingPage.
        navigateToProductPage(globalThis.productDetails.ProductCategory,
                             globalThis.productDetails.SubCategory);
                             
        Mp3Page.
               addProductToCart(globalThis.productDetails.ProductName);

        landingPage.
                elements.btnCart().click();

        landingPage.
                    verifyProductInCart(globalThis.productDetails.ProductName);
        landingPage.
                elements.
                btnViewCart().contains("View Cart").click();

        cy.url().
                should('include','?route=checkout/cart');
        cartPage.
                elements.btnCheckout().click();

        //checkout process
        checkoutPage.
                elements.radBtnNewAddr().check();
        checkoutPage.
                fillBillingDetails();
        checkoutPage.
                elements.btnBillingContinue().click();

        checkoutPage.
                elements.btnBillingContinue().click();
        checkoutPage.
                elements.btnDeliveryDetailsContinue().click();
        
        checkoutPage.
                elements.txtComments().type("ADD PRODUCT");
                cy.wait(1000)
        checkoutPage.
                elements.btnDeliveryMethodContinue().click({force:true});
        
        checkoutPage.
                elements.chlboxAgreeTerms().check();
        checkoutPage.
                elements.btnPaymentContinue().click();
        checkoutPage.
                elements.btnConfirmOrder().click();

        //Validate order success message
        cy.get("div[id='content'] h1").should('be.visible');
    }); 
});