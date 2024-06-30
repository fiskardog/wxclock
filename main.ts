function blinkLED (num: number) {
    led.toggle(0, 0)
    led.toggle(0, 0)
}
function uiText (text: string, num: number) {
    inkybit.drawText(
    text,
    num,
    y,
    inkybit.Color.Black,
    inkybit.TextSize.Medium
    )
}
function display () {
    inkybit.clear()
    uiNum(hr, 40)
    uiText(" : ", 70)
    uiNum(min, 100)
    uiText(" : ", 85)
    uiNum(sec, 90)
    inkybit.show()
}
function uiNum (num: number, num2: number) {
    inkybit.drawText(
    convertToText(num),
    num2,
    y,
    inkybit.Color.Black,
    inkybit.TextSize.Medium
    )
}
let y = 0
let hr = 0
let min = 0
let sec = 0
sec = 0
min = 0
hr = 0
display()
basic.forever(function () {
    sec += 1
    if (sec >= 60) {
        sec = 0
        min += 1
        if (min >= 60) {
            min = 0
            hr += 1
            if (hr >= 24) {
                hr = 0
            }
        }
    }
    led.toggle(0, 0)
    if (sec == 0) {
        display()
    }
    basic.pause(1000)
})
