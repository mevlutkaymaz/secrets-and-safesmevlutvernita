let on = 0
let value = 0
// Press button A 5 times and increase light level to be more than 130
input.onButtonPressed(Button.A, function () {
    on = on + 1
})
input.onButtonPressed(Button.B, function () {
    on = 0
})
basic.forever(function () {
    basic.pause(1000)
    value = input.lightLevel()
    if (on == 5 && value > 130) {
        pins.servoWritePin(AnalogPin.P0, 180)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # # # # #
            . . . . #
            # # # # #
            # . . . #
            # # # # #
            `)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . #
            # # # # #
            `)
    }
})
