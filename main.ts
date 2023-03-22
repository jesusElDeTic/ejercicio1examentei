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
    if (numero < 15 || numero < 1) {
        numero += 1
        makerbit.showStringOnLcd1602("" + (numero), numero, 1)
        makerbit.lcdShowCharacter1602(LcdChar.c1, numero + 16)
    } else {
        makerbit.showStringOnLcd1602("!", makerbit.position1602(LcdPosition1602.Pos16), 1)
    }
})
let numero = 0
numero = 0
makerbit.connectLcd(39)
basic.forever(function () {
	
})
