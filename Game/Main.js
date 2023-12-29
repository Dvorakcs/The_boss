const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const game = new GameEngine({
    canvas:canvas,
    ctx:ctx
})
function UPDATE(){
    game.UPDATE({

    })
    game.DRAW({

    })
    requestAnimationFrame(UPDATE)
}

UPDATE();
