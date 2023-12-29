class GameEngine{
    #canvas = null
    #ctx = null
    #keyPad = null
    #player = null
    #background = null
    constructor(config){
        this.#canvas = config.canvas,
        this.#ctx = config.ctx

        this.#canvas.width = (64 * 16)/1
        this.#canvas.height = (64 * 9)/1
        this.#keyPad = new Keypad()
        this.#player = new Player({
            position: {x:10,y:10},
            width: 50,
            height: 50
        })
        this.#background = new Sprite({
            position:{x:0,y:0},
            imageSrc:'/Game/src/Image/Level/backgroundLevel1.png'
        })
    }

    
    UPDATE(EventUpdate){
        this.#player.UPDATE({
            keySet:this.#keyPad.KEY
        })
    }
    DRAW(EventDraw){
       
        this.#ctx.clearRect(0,0,this.#canvas.width,this.#canvas.height) 
        this.#ctx.fillStyle = 'white'
        this.#ctx.fillRect(0,0,this.#canvas.width,this.#canvas.height)
       
        this.#background.DRAW(this.#ctx)
        this.#player.DRAW(this.#ctx)
    }
}