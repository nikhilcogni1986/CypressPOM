///<reference types ="cypress"/>
class CartPage
{
    elements = 
    {
       btnCheckout: ()=> cy.get("div.pull-right .btn.btn-primary")
    }
}
export default CartPage;