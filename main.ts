/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Batiuk
 * Created on: Nov 2025
 * This program does a While Loop, again
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// a button
input.onButtonPressed(Button.A, function () {
    
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)

    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)

    }

    loopCounter = 0
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)

    }

    loopCounter = 4
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)

    }

    loopCounter = 4
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)

    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
   
})

// b button
input.onButtonPressed(Button.B, function () {

    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)

    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)

    }

    loopCounter = 0
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)

    }

    loopCounter = 4
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)

    }

    loopCounter = 4
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)

    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)

})
