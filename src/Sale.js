var decorators = require('./Decorators')

class Sale {
    constructor(price) {
        this.price = price > 0 ? price : 100
        this.decorators_list = []
        this.decorators = decorators
    }

    decorate(decorator) {
        this.decorators_list.push(decorator)
    }

    GetPrice() {
        let price = this.price
        let max = this.decorators_list.length
        let name

        for (let i = 0; i < max; i++) {
            name = this.decorators_list[i]
            price = this.decorators[name].GetPrice(price)
        }
        return price
    }

}


module.exports = Sale

