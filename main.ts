input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.showNumber(input.soundLevel())
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Square)
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Duck)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("duck")
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.SmallSquare)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})
radio.setGroup(1)
