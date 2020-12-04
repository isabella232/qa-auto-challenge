const { defaultDataRegister } = require('../../helpers/data.helper');
const { getRandomEmail } = require('../../helpers/common.helper');

const RegisterPage = require('../../pageobjects/register.page');

describe('Register Feature', () => {

    beforeEach( () => {
        RegisterPage.open();
    })

    it('try to register with invalid confirm password', () => {

        const errorMessage = 'Password confirmation does not match password!'
        
        let testData = defaultDataRegister();
        testData.confirmPassword = 'user';

        RegisterPage.register(testData);      
        expect(RegisterPage.lblError).toHaveText(errorMessage);
    });

    it('try to register with empty firstName', () => {
        
        const errorMessage = 'First Name must be between 1 and 32 characters!'
        
        let testData = defaultDataRegister();
        testData.firstName = '';

        RegisterPage.open();
        RegisterPage.register(testData1);      
        expect(RegisterPage.lblError).toHaveText(errorMessage);
        expect(browser).toHaveUrlContaining('route=account/regisster')
        
    });

    it('success to register', () => {

        const successMessage = 'Your Account Has Been Created!'
        
        let testData = defaultDataRegister();
        testData.email = getRandomEmail();

        RegisterPage.open();
        RegisterPage.register(testData);      

        expect(RegisterPage.lblError).not.toExist();
        expect(RegisterPage.alertError).not.toExist();
        expect(RegisterPage.titleSuccess).toHaveText(successMessage);
    });

});


