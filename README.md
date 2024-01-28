
# Cypress POM

Cypress-POM is based on Page Object Basic Model design pattern.

https://github.com/nikhilcogni1986/CypressPOM.git
https://www.npmjs.com/package/cypress-page-object-model


## Installation

How To Setup and Run ==> How To Use this framework ( Ready To Use )

Step 1
1. Install NodeJs https://nodejs.org/en/download/
2. Make Folder called "Cypress-POM-Framework"                 in any folder on your machine
3. Open Folder Using the VSCode editor or any IDE
4. Clone the repo using 
   https://github.com/nikhilcogni1986/CypressPOM.git  
5. Run command - npm install this will install all the dependencies required for this framework.                   
6. Now hit npx cypress open        
7. Now you can run tests 
  - LoginTest.cy.js
  - AddProductToCart.cy.js
## Adding Pages to Framework
How To Add Page Code ==>  
1.Create your individual pages objects with pageName.js in the folder => "pageObjects"


class LoginPage  
{
            
    elements = 
    {
        txtUsername: () => cy.get("#input-email"),
        txtPassword: () => cy.get("#input-password"),
        btnLogin: () => cy.get("input[value='Login']"),
        lblNewCustomer:() =>cy.get('div.well h2')
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
## Adding UI Tests to the Framework

Step 3 How To Add UI Test Case ==> 
1. Create your individual test with name contain spec in it: LoginTest.cy.js in the folder => E2E under Tests.

2. Add the code to load the fixtures and import necessary
   pages for use to create page objects.

3. Add test case(s) with multiple it blocks based on functionality.

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
## Running the Tests from Command Line
Tests can be run in different browser from                  the command line either in headed or headless mode

npx cypress run --browser chrome   
npx cypress run --browser chromium  
npx cypress run --browser firefox  
npx cypress run --browser edge  
npx cypress run --browser electron --headed


## Running Tests from Single Click

Tests can also be triggered from                            
Package.JSON file by adding
commands to scripts

 "scripts":  
 {  
    
    "test": "node_modules\\.bin\\cypress run",   
    "ChromeHeadedTest":"npm run test -- --browser chrome",  
    "FirefoxHeadlessTest":"npm run test -- --browser firefox",  
    "EdgeHeadless": "npm run test -- --browser edge",  
    "ElectronHeaded": "npm run test -- --browser electron --headed"

  }
## Supports

Multiple browser automation   
Jenkins Integration    
Headless run
Testdata driven tests  
Retries of failed tests
## Contributing

- Clone the repo!
- Create your feature branch: git checkout -b my-new-feature
- Commit your changes: git commit -am 'Add some feature'
- Push to the branch: git push origin my-new-feature
- Create a pull request.
## Acknowledgements

 - To all the open source contributors whose code has been  referred in this project.

## Licenses
- This project is licensed under the GNU GPL-3.0 License - see the LICENSE file for details
