const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {   /**
     * define selectors using getter methods
     */
    get inputEmail () { return $('#input-email') }
    get inputPassword () { return $('#input-password') }
    get btnSubmit () { return $('[value=Login]') }
    
    get alertError () { return $('.alert-danger') }
    get titleSuccess () { return $('#content h1')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (loginData) {
        this.inputEmail.setValue(loginData.email);
        this.inputPassword.setValue(loginData.password);

        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/index.php?route=account/login');
    }
}

module.exports = new LoginPage();
