const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AccountPage extends Page {

    pageUrl = '?route=account/account';
}

module.exports = new AccountPage();
