// Армия функций
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i - 1
        let shooter = function () {
            j++
            console.log(j);
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0]()
army[5]()