//Фильтрация с помощью функции
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(start, end) {
    return function (elem) {
        return elem >= start && elem <= end
    }
}

function inArray(array) {
    return function (elem) {
        return array.includes(elem)
    }
}

console.log(arr.filter(inBetween(3, 6)))

console.log(arr.filter(inArray([1, 2, 10])))