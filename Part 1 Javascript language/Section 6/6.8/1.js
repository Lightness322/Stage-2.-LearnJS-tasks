//Вывод каждую секунду
//  Используя setInterval
function printNumbers(from, to) {
    let num = from
    let timerId = setInterval(function () {
        console.log(num)
        if (num === to) {
            clearInterval(timerId)
        }
        num++
    }, 1000)
}

//  Используя рекурсивный setTimeout.
function printNumbers(from, to) {
    let num = from

    setTimeout(function go() {
        console.log(num)
        if (num < to) {
            setTimeout(go, 1000)
        }
        num++
    }, 1000)
}