//Установка и уменьшение значения счётчика
function makeCounter() {
    let count = 0
    function counter() {
        count++
        return count
    }

    counter.set = value => count = value

    counter.decrease = () => count--

    return counter
}