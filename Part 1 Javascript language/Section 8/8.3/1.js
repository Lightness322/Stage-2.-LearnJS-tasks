//Добавить функциям метод "f.defer(ms)"
Function.prototype.defer = function defer(ms) {
    setTimeout(this, ms)
}

function f() {
    console.log("Hello!");
}

f.defer(1000)