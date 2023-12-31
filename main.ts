namespace SpriteKind {
    export const keepitup = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.keepitup, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ..........eeeeee................
            .......eeeeeeeeeee..............
            .....eeeeeeeeeeeeee.............
            ....eeeeeeeeeeeeeeee............
            ...eeeeeeeeeeeeeeeeee...........
            ..eeeeeeeeeeeeeeeeeeee..........
            .eeeeeeeeeeeeeeeeeeeee..........
            .eeeeeeeeeeeeeeeeeeeeee.........
            eeeeeeeeeeeeeeeeeeeeeee.........
            eeeeeeeeeeeeeeeeeeeeeee.........
            eeeeeeeeeeeeeeeeeeeeeeee........
            eeeeeeeeeeeeeeeeeeeeeeee........
            eeeeeeeeeeeeeeeeeeeeeeee........
            eeeeeeeeeeeeeeeeeeeeeeee........
            eeeeeeeeeeeeeeeeeeeeeeee........
            .eeeeeeeeeeeeeeeeeeeeeee........
            .eeeeeeeeeeeeeeeeeeeeeeee.......
            ..eeeeeeeeeeeeeeeeeeeeeee.......
            ...eeeeeeeeeeeeeeeeeeeeee.......
            .....eeeeeeeeeeeeeeeeeeee.......
            .......eeeeeeeeeeeeeeeeee.......
            ............eeeeeeeeeeeee.......
            ..............eeeeeeeeeeee......
            .................eeeeeeeeee.....
            .......................eeeeeeee.
            ........................eeeeeeee
            .........................eeeeeee
            .........................eeeeeee
            .........................eeeeeee
            .........................eeeeeee
            ..........................eeeeee
            ................................
            `,img`
            .........................eeeeee.
            ........................eeeeeee.
            ........................eeeeeee.
            ........................eeeeeee.
            ........................eeeeeee.
            .......................eeeeeeee.
            ......................eeeeeeee..
            ................eeeeeeeeee......
            ..........eeeeeeeeeeeeeee.......
            .......eeeeeeeeeeeeeeeee........
            .....eeeeeeeeeeeeeeeeeee........
            ....eeeeeeeeeeeeeeeeeeee........
            ...eeeeeeeeeeeeeeeeeeeee........
            ..eeeeeeeeeeeeeeeeeeeeee........
            .eeeeeeeeeeeeeeeeeeeeeee........
            .eeeeeeeeeeeeeeeeeeeeee.........
            eeeeeeeeeeeeeeeeeeeeeee.........
            eeeeeeeeeeeeeeeeeeeeeee.........
            eeeeeeeeeeeeeeeeeeeeee..........
            eeeeeeeeeeeeeeeeeeeeee..........
            eeeeeeeeeeeeeeeeeeeee...........
            eeeeeeeeeeeeeeeeeeeee...........
            .eeeeeeeeeeeeeeeeeeee...........
            .eeeeeeeeeeeeeeeeeeee...........
            .eeeeeeeeeeeeeeeeeeee...........
            ..eeeeeeeeeeeeeeeeee............
            ..eeeeeeeeeeeeeeeeee............
            ...eeeeeeeeeeeeeeee.............
            ....eeeeeeeeeeeeeee.............
            .....eeeeeeeeeeeee..............
            ......eeeeeeeeeee...............
            ........eeeeeee.................
            `,img`
            ................................
            eeeeee..........................
            eeeeeee.........................
            eeeeeee.........................
            eeeeeee.........................
            eeeeeee.........................
            eeeeeeee........................
            .eeeeeeee.......................
            .....eeeeeeeeee.................
            ......eeeeeeeeeeee..............
            .......eeeeeeeeeeeee............
            .......eeeeeeeeeeeeeeeeee.......
            .......eeeeeeeeeeeeeeeeeeee.....
            .......eeeeeeeeeeeeeeeeeeeeee...
            .......eeeeeeeeeeeeeeeeeeeeeee..
            .......eeeeeeeeeeeeeeeeeeeeeeee.
            ........eeeeeeeeeeeeeeeeeeeeeee.
            ........eeeeeeeeeeeeeeeeeeeeeeee
            ........eeeeeeeeeeeeeeeeeeeeeeee
            ........eeeeeeeeeeeeeeeeeeeeeeee
            ........eeeeeeeeeeeeeeeeeeeeeeee
            ........eeeeeeeeeeeeeeeeeeeeeeee
            .........eeeeeeeeeeeeeeeeeeeeeee
            .........eeeeeeeeeeeeeeeeeeeeeee
            .........eeeeeeeeeeeeeeeeeeeeee.
            ..........eeeeeeeeeeeeeeeeeeeee.
            ..........eeeeeeeeeeeeeeeeeeee..
            ...........eeeeeeeeeeeeeeeeee...
            ............eeeeeeeeeeeeeeee....
            .............eeeeeeeeeeeeee.....
            ..............eeeeeeeeeee.......
            ................eeeeee..........
            `,img`
            .........................eeeeee.
            ........................eeeeeee.
            ........................eeeeeee.
            ........................eeeeeee.
            ........................eeeeeee.
            .......................eeeeeeee.
            ......................eeeeeeee..
            ................eeeeeeeeee......
            ..........eeeeeeeeeeeeeee.......
            .......eeeeeeeeeeeeeeeee........
            .....eeeeeeeeeeeeeeeeeee........
            ....eeeeeeeeeeeeeeeeeeee........
            ...eeeeeeeeeeeeeeeeeeeee........
            ..eeeeeeeeeeeeeeeeeeeeee........
            .eeeeeeeeeeeeeeeeeeeeeee........
            .eeeeeeeeeeeeeeeeeeeeee.........
            eeeeeeeeeeeeeeeeeeeeeee.........
            eeeeeeeeeeeeeeeeeeeeeee.........
            eeeeeeeeeeeeeeeeeeeeee..........
            eeeeeeeeeeeeeeeeeeeeee..........
            eeeeeeeeeeeeeeeeeeeee...........
            eeeeeeeeeeeeeeeeeeeee...........
            .eeeeeeeeeeeeeeeeeeee...........
            .eeeeeeeeeeeeeeeeeeee...........
            .eeeeeeeeeeeeeeeeeeee...........
            ..eeeeeeeeeeeeeeeeee............
            ..eeeeeeeeeeeeeeeeee............
            ...eeeeeeeeeeeeeeee.............
            ....eeeeeeeeeeeeeee.............
            .....eeeeeeeeeeeee..............
            ......eeeeeeeeeee...............
            ........eeeeeee.................
            `],
        100,
        false
        )
        pause(100)
        mySprite.setImage(img`
            ..........eeeeee................
            .......eeeeeeeeeee..............
            .....eeeeeeeeeeeeee.............
            ....eeeeeeeeeeeeeeee............
            ...eeeeeeeeeeeeeeeeee...........
            ..eeeeeeeeeeeeeeeeeeee..........
            .eeeeeeeeeeeeeeeeeeeee..........
            .eeeeeeeeeeeeeeeeeeeeee.........
            eeeeeeeeeeeeeeeeeeeeeee.........
            eeeeeeeeeeeeeeeeeeeeeee.........
            eeeeeeeeeeeeeeeeeeeeeeee........
            eeeeeeeeeeeeeeeeeeeeeeee........
            eeeeeeeeeeeeeeeeeeeeeeee........
            eeeeeeeeeeeeeeeeeeeeeeee........
            eeeeeeeeeeeeeeeeeeeeeeee........
            .eeeeeeeeeeeeeeeeeeeeeee........
            .eeeeeeeeeeeeeeeeeeeeeeee.......
            ..eeeeeeeeeeeeeeeeeeeeeee.......
            ...eeeeeeeeeeeeeeeeeeeeee.......
            .....eeeeeeeeeeeeeeeeeeee.......
            .......eeeeeeeeeeeeeeeeee.......
            ............eeeeeeeeeeeee.......
            ..............eeeeeeeeeeee......
            .................eeeeeeeeee.....
            .......................eeeeeeee.
            ........................eeeeeeee
            .........................eeeeeee
            .........................eeeeeee
            .........................eeeeeee
            .........................eeeeeee
            ..........................eeeeee
            ................................
            `)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.keepitup, function (sprite2, otherSprite2) {
    if (controller.A.isPressed()) {
        myDart.throwDart()
        myDart.gravity += randint(200, -200)
        myDart.angle += 0
        myDart.angle += randint(360, -360)
        statusbar.value += 3
        info.changeScoreBy(1)
    } else {
        statusbar.value += -5
    }
})
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let myDart: Dart = null
info.startCountdown(240)
tiles.setCurrentTilemap(tilemap`level1`)
myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 b 1 . . . . . . . 
    . . . . . . 2 2 3 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.keepitup)
mySprite = sprites.create(img`
    ..........eeeeee................
    .......eeeeeeeeeee..............
    .....eeeeeeeeeeeeee.............
    ....eeeeeeeeeeeeeeee............
    ...eeeeeeeeeeeeeeeeee...........
    ..eeeeeeeeeeeeeeeeeeee..........
    .eeeeeeeeeeeeeeeeeeeee..........
    .eeeeeeeeeeeeeeeeeeeeee.........
    eeeeeeeeeeeeeeeeeeeeeee.........
    eeeeeeeeeeeeeeeeeeeeeee.........
    eeeeeeeeeeeeeeeeeeeeeeee........
    eeeeeeeeeeeeeeeeeeeeeeee........
    eeeeeeeeeeeeeeeeeeeeeeee........
    eeeeeeeeeeeeeeeeeeeeeeee........
    eeeeeeeeeeeeeeeeeeeeeeee........
    .eeeeeeeeeeeeeeeeeeeeeee........
    .eeeeeeeeeeeeeeeeeeeeeeee.......
    ..eeeeeeeeeeeeeeeeeeeeeee.......
    ...eeeeeeeeeeeeeeeeeeeeee.......
    .....eeeeeeeeeeeeeeeeeeee.......
    .......eeeeeeeeeeeeeeeeee.......
    ............eeeeeeeeeeeee.......
    ..............eeeeeeeeeeee......
    .................eeeeeeeeee.....
    .......................eeeeeeee.
    ........................eeeeeeee
    .........................eeeeeee
    .........................eeeeeee
    .........................eeeeeee
    .........................eeeeeee
    ..........................eeeeee
    ................................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
myDart.throwDart()
myDart.setPosition(0, 0)
mySprite.setStayInScreen(true)
myDart.setStayInScreen(false)
myDart.setBounceOnWall(true)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(6, 230)
myDart.pow = 4000
statusbar.value += 1000
