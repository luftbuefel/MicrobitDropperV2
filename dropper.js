let apple: game.LedSprite = null
let start_time = 0
let player: game.LedSprite = null
input.onButtonPressed(Button.A, () => {
    player.move(-1)
})
input.onButtonPressed(Button.B, () => {
    player.move(1)
})
function drop_apple()  {
    start_time = start_time
    if (true) {
        apple = game.createSprite(Math.random(5), 0)
    }
}
player = game.createSprite(2, 4)
drop_apple()
basic.forever(() => {
    if ((input.runningTime() - start_time) % 50 == 0) {
        apple.change(LedSpriteProperty.Y, 1)
    }
    if (apple.isTouching(player)) {
        game.addScore(1)
        drop_apple()
    }
})
