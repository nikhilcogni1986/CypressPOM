///<reference types ="cypress"/>
class MP3PlayerPage
{
    elements = 
    {
        lnkHeaderLinks: () => cy.get("div.product-thumb div.caption h4 a"),
        btnAddToCart:() => cy.get("div.product-thumb div.button-group span"),
        alrtSuccessMsg: () => cy.get("div.alert.alert-success")
    }

    addProductToCart(productName)
    {
        cy.addProductToCart(productName);
    }

    
}
export default MP3PlayerPage;