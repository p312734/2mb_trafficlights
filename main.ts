radio.onReceivedNumber(function (receivedNumber) {
    if (Roadway_Status.compare("G") == 1) {
        basic.pause(2000)
        basic.showString(Roadway_Status)
        basic.showNumber(0)
        basic.showIcon(IconNames.Happy)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Sad)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(0)
    radio.sendNumber(0)
    basic.pause(2000)
    basic.showNumber(0)
})
let Roadway_Status = ""
radio.setGroup(1)
Roadway_Status = "G"
basic.showString(Roadway_Status)
basic.forever(function () {
	
})
