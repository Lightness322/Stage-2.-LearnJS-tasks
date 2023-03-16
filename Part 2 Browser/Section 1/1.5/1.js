// Считаем потомков
// Какой в нём текст (без поддерева) ?
for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;
}
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
li.getElementsByTagName('li').length