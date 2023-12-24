class Tile {
    position = null
    width = 0
    height = 0
    Sprite = null
    constructor(config){
        this.position = config.position
        this.width = config.width
        this.height = config.height
        this.Sprite = new Sprite({
            src:'/Game/Images/Mario/objects.gif',
            position: this.position,
            width:16,
            height:16,
            imageWidth: 32,
            imageHeight: 32,
            id:this.id,
           
        })
    }

    START(startEvent){

    }
    UPDATE(UpdateEvent){
        this.Sprite.UPDATE({
            frame: [492,555]
        })
    }
    DRAW(DrawEvent){
        this.Sprite.DRAW(DrawEvent)
        
    }
    STOP(StopEvent){

    }
}