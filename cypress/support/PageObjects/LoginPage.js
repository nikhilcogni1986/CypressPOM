///<reference types ="cypress"/>
class LoginPage
{
    elements = 
    {
        txtUsername: () => cy.get("#input-email"),
        txtPassword: () => cy.get("#input-password"),
        btnLogin: () => cy.get("input[value='Login']"),
        lblNewCustomer:() =>cy.get('div.well h2'),
        alrtErrorMsg: () => cy.get(".alert.alert-danger.alert-dismissible"),
        btnLogout: ()=> cy.get("div.list-group a[href*='logout']")
    }

    loginToApplication(username, password)
    {
        this.elements.txtUsername().type(username);
        this.elements.txtPassword().type(password);
        this.elements.btnLogin().click();
    }

    logout()
    {
        this.elements.btnLogout().click();
        cy.url().should('contain','route=account/logout');
        
        cy.get("#content h1").then((logoutHeader)=>{
            let logout_txt = logoutHeader.text();
            expect(logout_txt).to.contain('Account Logout');
        });
    }
}
export default LoginPage;