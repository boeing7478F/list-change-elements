input.onButtonPressed(Button.A, function () {
    for (let index2 = 0; index2 < list.length; index2++) {
        list[index] = randint(11, 20)
        index += 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(list[randint(0, 20)])
    getvalue = list[randint(0, 20)]
    basic.pause(100)
    basic.showNumber(list.indexOf(getvalue))
})
let getvalue = 0
let list: number[] = []
let index = 0
index = 0
for (let index2 = 0; index2 < 20; index2++) {
    list.push(randint(0, 10))
}
