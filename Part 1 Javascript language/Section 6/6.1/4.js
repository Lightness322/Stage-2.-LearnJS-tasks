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
    while (!!list === true) {
        console.log(list.value)
        list = list.next
    }
}

// используя рекурсию
function printList(list) {
    if (!!list === true) {
        console.log(list.value)
        printList(list.next)
    }
}