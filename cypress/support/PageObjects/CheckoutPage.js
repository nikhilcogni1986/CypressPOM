///<reference types ="cypress"/>

class CheckoutPage {
    elements =
        {
            radBtnExistingAddr: () => cy.get(':nth-child(1) > label > input'),
            radBtnNewAddr: () => cy.get("input[value='new']"),
            txtFirstName: () => cy.get("#input-payment-firstname"),
            txtLastName: () => cy.get("#input-payment-lastname"),
            txtAddrLine1: () => cy.get("#input-payment-address-1"),
            txtCity: () => cy.get("#input-payment-city"),
            txtPostcode: () => cy.get("#input-payment-postcode"),
            drpdwnCountry: () => cy.get("#input-payment-country"),
            drpdwnState: () => cy.get("#input-payment-zone"),

            btnBillingContinue: () => cy.get("#button-payment-address"),
            btnDeliveryDetailsContinue: () => cy.get("#button-shipping-address"),

            txtComments: ()=> cy.get("textarea[name='comment']"),
            btnDeliveryMethodContinue: () =>cy.get("#button-shipping-method"),
            
            chlboxAgreeTerms:()=> cy.get("input[name='agree']"),
            btnPaymentContinue: ()=> cy.get('#button-payment-method'),
            btnConfirmOrder: ()=> cy.get("#button-confirm")
        }

    fillBillingDetails() {
        this.elements.txtFirstName().type("Rakesh");
        this.elements.txtLastName().type("Hegade");
        this.elements.txtAddrLine1().type("65 Motor Street");
        this.elements.txtCity().type("Bangalore");
        this.elements.txtPostcode().type("560016");
        this.elements.drpdwnCountry().select("India");
        this.elements.drpdwnState().select("Karnataka");
    }
}
export default CheckoutPage;