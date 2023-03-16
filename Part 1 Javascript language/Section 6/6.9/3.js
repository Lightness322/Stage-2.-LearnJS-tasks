// Декоратор debounce
function debounce(func, ms) {
    let status = 'ready'

    return function () {
        if (status === 'waiting') {
            return
        }
        func.apply(this, arguments)

        status = 'waiting'

        setTimeout(() => status = 'ready', ms)
    }
}