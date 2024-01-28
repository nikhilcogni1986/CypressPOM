///<reference types ="cypress"/>
class LandingPage
{
    elements = 
    {
        lnkHeaderLinks: () => cy.get("ul.nav.navbar-nav li a"),
        lblHeader:() => cy.get("#content h2"),
        btnCart:() => cy.get("#cart button span"),
        prodNameInCart: () => cy.get("ul.dropdown-menu.pull-right li tbody tr td:nth-child(2) a"),
        btnViewCart: ()=> cy.get("ul.dropdown-menu.pull-right li")
    }

    navigateToProductPage(productLinkName, prodSubLink)
    {
        this.elements.lnkHeaderLinks().contains(productLinkName).click();
        this.elements.lnkHeaderLinks().contains(prodSubLink).click();
    }   

    verifyProductInCart(productName)
    {
        //verify the product name
        this.elements.prodNameInCart().then((productInCart)=>
        {
            expect(productInCart.text()).to.be.equal(productName);
        })
    }
}
export default LandingPage;