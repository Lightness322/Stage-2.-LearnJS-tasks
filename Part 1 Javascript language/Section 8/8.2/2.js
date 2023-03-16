// Создайте новый объект с помощью уже существующего
//  Корректно
function Country(country) {
    this.country = country
}

russia = new Country('Russia')
germany = new russia.constructor('Germany')

console.log(russia.country)
console.log(germany.country)
//  Некорректно
function Country(country) {
    this.country = country
}

Country.prototype = {}

russia = new Country('Russia')
germany = new russia.constructor('Germany')

console.log(russia.country)
console.log(germany.country)