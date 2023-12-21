class Sprite{
    position = null
    width = 0
    height = 0
    image = new Image()
    imageWidth = 0
    imageHeight = 0
    cut = null
    frame = null
    constructor(config){
            this.position = config.position
            this.width = config.width
            this.height = config.height
            this.image.src = config.src
            this.imageWidth = config.imageWidth
            this.imageHeight = config.imageHeight
            this.cut = config.cut
            this.frame = new Frame({
                id:config.id,
                maxFrame:config.maxFrame
            })
    }

    START(StartEvent){
    
    }
    UPDATE(UpdateEvent){
            this.frame.UPDATE(UpdateEvent)
            
    }
    DRAW(DrawEvent){
        DrawEvent.strokeStyle = "red"
        DrawEvent.strokeRect(this.position.x,this.position.y,this.width,this.height)
        DrawEvent.drawImage(this.image,this.cut.x * this.frame.FrameX,this.cut.y *0,
                            this.width,this.height,
                            this.position.x,this.position.y,this.imageWidth,this.imageHeight)
   
                        }
                        
    STOP(StopEvent){

    }


}