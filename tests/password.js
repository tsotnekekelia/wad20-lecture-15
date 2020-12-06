// Import the dependencies for testing
const chai = require('chai');
const pwd = require('../library/password');
// Configure chai
chai.should();
describe("Password library", () => {

    it("should generate salt", (done) => {
        let salt = pwd.generateSalt();
        salt.should.be.a('string');
        done();
    });

    it("should hash properly", (done) => {
        let realPassword = '608a3596ec397e4351ab99c048a4b08aaf0cdca34972bd53ef5b33cecd99f86a';
        let salt = 'a52eb3447db065afc6efb6eaf5650712';
        let password = 'password';
        let calculatedPassword = pwd.hashPassword(password, salt);
        calculatedPassword.should.eq(realPassword);
        done();
    });

});