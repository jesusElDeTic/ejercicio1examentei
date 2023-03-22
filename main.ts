input.onButtonPressed(Button.A, function () {
    makerbit.lcdMakeCharacter(LcdChar.c1, makerbit.lcdCharacterPixels(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `))
    if (numero < 9 && numero >= 0) {
        numero += 1
        makerbit.showStringOnLcd1602("" + (numero), numero, 1)
        makerbit.lcdShowCharacter1602(LcdChar.c1, numero + 16)
    } else {
        makerbit.showStringOnLcd1602("!", makerbit.position1602(LcdPosition1602.Pos16), 1)
        basic.pause(500)
        makerbit.showStringOnLcd1602("", makerbit.position1602(LcdPosition1602.Pos16), 1)
    }
    makerbit.showStringOnLcd1602("" + (numero), makerbit.position1602(LcdPosition1602.Pos30), 2)
})
input.onButtonPressed(Button.B, function () {
    makerbit.lcdMakeCharacter(LcdChar.c2, makerbit.lcdCharacterPixels(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `))
    if (numero < 8 && numero >= 0) {
        makerbit.showStringOnLcd1602("", numero, 1)
        makerbit.lcdShowCharacter1602(LcdChar.c2, numero + 16)
        numero += -1
    } else {
        makerbit.showStringOnLcd1602("!", makerbit.position1602(LcdPosition1602.Pos16), 1)
        basic.pause(500)
        makerbit.showStringOnLcd1602("", makerbit.position1602(LcdPosition1602.Pos16), 1)
    }
    makerbit.showStringOnLcd1602("" + (numero), makerbit.position1602(LcdPosition1602.Pos30), 2)
})
let numero = 0
numero = 0
makerbit.connectLcd(39)
makerbit.clearLcd1602()
basic.forever(function () {
	
})
