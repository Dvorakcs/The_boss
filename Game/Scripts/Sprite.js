class Sprite{
    position = null
    width = 0
    height = 0
    image = new Image()
    imageWidth = 0
    imageHeight = 0
    frame = null
    constructor(config){
            this.position = config.position
            this.width = config.width
            this.height = config.height
            this.image.src = config.src
            this.imageWidth = config.imageWidth
            this.imageHeight = config.imageHeight
    }

    START(StartEvent){
    
    }
    UPDATE(UpdateEvent){

        this.frame = UpdateEvent.frame
    }
    DRAW(DrawEvent){
       // DrawEvent.strokeStyle = "red"
        //DrawEvent.strokeRect(this.position.x,this.position.y,this.width,this.height)
        DrawEvent.drawImage(this.image,this.frame[0],this.frame[1],
                            this.width,this.height,
                            this.position.x,this.position.y - 2,this.imageWidth,this.imageHeight)
   
                        }
                        
    STOP(StopEvent){

    }


}