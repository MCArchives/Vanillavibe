// Here is the groovy file for screen elements
info("Copyright © 2021 Team CSS. All right reserved.")
mainMenu {
    enabled = true
    splashText {
        enabled = true
        splashesEnabled = false
    }
    background {
        clearBackgrounds()
        backgroundStayLength = 1
        backgroundFadeLength = 1
        renderGradientShade = false
        image { texture = file("config/modpack/menu/background.png") }
    }
    removeMinecraftLogo()
    removeEditionBadge()
    clearAllButtons()

    button {
        position {
            x { it / 2 + 3 }
            y = 201
        }
        width = 100
        height = 20
        text = literal("Mods")
        onClicked = modMenu()
    }
    button {
        position {
            x { it / 2 - 101 }
            y = 201
        }
        width = 100
        height = 20
        text = literal("Languages")
        onClicked = language()
    }
    button {
        position {
            x { it / 2 - 101 }
            y = 133
        }
        width = 204
        height = 20
        text = translatable("menu.singleplayer")
        onClicked = singleplayer()
    }
    button {
        position {
            x { it / 2 - 101 }
            y = 155
        }
        width = 204
        height = 20
        text = translatable("menu.multiplayer")
        onClicked = multiplayer()
    }
    button {
        position {
            x { it / 2 + 3 }
            y = 224
        }
        width = 100
        height = 20
        text = translatable("menu.quit")
        onClicked = exit()
    }
    button {
        position {
            x { it / 2 - 101 }
            y = 224
        }
        width = 100
        height = 20
        text = translatable("menu.options")
        onClicked = options()
    }
    button {
        position {
            x { it / 2 + 3 }
            y = 178
        }
        width = 100
        height = 20
        text = literal("Host a Server")
        onClicked = url("https://www.bisecthosting.com/vanillavibe")
    }
    button {
        position {
            x { it / 2 - 101 }
            y = 178
        }
        width = 100
        height = 20
        text = literal("Website")
        onClicked = url("http://vanillavibe.website/")
    }
}