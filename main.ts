input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(9)
    basic.showLeds(`
        . # # . .
        . # # . .
        . # # . .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(7)
    basic.showIcon(IconNames.Giraffe)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(6)
    basic.showIcon(IconNames.House)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(8)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
radio.setGroup(13)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Duck)
basic.forever(function () {
	
})
