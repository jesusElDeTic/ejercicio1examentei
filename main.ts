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
    numero += 1
    makerbit.showStringOnLcd1602("" + (numero), numero, 1)
    makerbit.lcdShowCharacter1602(LcdChar.c1, numero + 16)
})
let numero = 0
numero = 0
makerbit.connectLcd(39)
basic.forever(function () {
	
})
