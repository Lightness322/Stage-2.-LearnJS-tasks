// С использованием цикла
function sumTo(N) {
    let res = 0

    for (let i = 1; i <= N; i++) {
        res += i
    }
    return res
}
// Через рекурсию
function sumTo(N) {
    return N >= 1 ? N + sumTo(N - 1) : 0
}
// С использованием формулы арифметической прогрессии
function sumTo(N) {
    return (1 + N) / 2 * N
}