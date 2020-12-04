const { getRandomEmail } = require('./common.helper');

function defaultDataRegister() {
    return {
        firstName: 'Lucia',
        lastName: 'Calavera',
        email: getRandomEmail(),
        telephone: '11231',
        password: 'password',
        confirmPassword: 'password',
        agree: true
    }
};

function defaultUser() {
    return {
        email: 'pablo@test.com',
        password: 'test',
    }
};

module.exports = { 
    defaultDataRegister, 
    defaultUser 
}