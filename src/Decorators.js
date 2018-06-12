var decorators = {}
decorators.fedtax = {
    GetPrice: function (price) {
        return price + price * 5 / 100
    }
}

decorators.quebec = {
    GetPrice: function (price) {
        return price + price * 7.5 / 100
    }
}
decorators.money = {
    GetPrice: function (price) {
        return price.toFixed(2)
    }
}
module.exports = decorators