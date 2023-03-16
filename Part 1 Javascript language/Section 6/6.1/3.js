function fib(N) {
    let firstNum, secondNum, sumNum, Num

    if (N === 1 || N === 2) {
        return 1
    }

    firstNum = 1
    secondNum = 1

    for (let i = 3; i <= N; i++) {
        sumNum = firstNum + secondNum
        Num = sumNum
        firstNum = secondNum
        secondNum = Num
    }
    return Num
}