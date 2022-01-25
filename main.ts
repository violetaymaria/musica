radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == input.temperature()) {
        basic.showNumber(input.temperature())
    } else if (receivedNumber == input.lightLevel()) {
        basic.showNumber(input.lightLevel())
    } else if (receivedNumber == 2) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
radio.setGroup(6)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(input.temperature())
        basic.showNumber(input.temperature())
        basic.pause(500)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(input.lightLevel())
        basic.showNumber(input.lightLevel())
        basic.pause(500)
    } else if (input.logoIsPressed()) {
        radio.sendNumber(2)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(1000)
    }
})
