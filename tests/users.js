// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Users routes", () => {

    it("should get all users record", (done) => {
        chai.request(app)
            .get('/users')
            .set('Authorization', 'Bearer')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it("should log in successfully", (done) => {
        chai.request(app)
            .post(`/users/login`)
            .send({
                'password': 'password',
                'email': 'john.doe@example.com'
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("should NOT log in successfully", (done) => {
        chai.request(app)
            .get(`/users/login`)
            .send({
                'password': 'wrong_password',
                'email': 'john.doe@example.com'
            })
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
});