var mocha = require('mocha')
var chai = require('chai')
chai.should()

var SaleObj = require('../src/Sale')
describe('Sale', () => {
    it('#GetPrice()', () => {
        let expected = '112.88'
        let sale = new SaleObj(100)
        sale.decorate('fedtax')
        sale.decorate('quebec')
        sale.decorate('money')
        let actual = sale.GetPrice()
        actual.should.be.equal(expected)
    });
});