// Задерживающий декоратор

function delay(func, ms) {
    return function wrapper() {
        setTimeout(() => func.apply(this, arguments), ms)
    }
}