let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// используя цикл
function printList(list) {
    let newArr = []

    while (!!list === true) {
        newArr.push(list.value)
        list = list.next
    }
    while (newArr.length !== 0) {
        console.log(newArr.pop())
    }
}

// используя рекурсию
function printList(list) {
    if (!!list === true) {
        printList(list.next)
        console.log(list.value)
    }
}