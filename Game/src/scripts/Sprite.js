class Sprite{
    #Position = null
    #Image = null
    #LoadedImage = false
    #Width = 0
    #Height = 0
    #FrameRate = 0
    #CurrentFrame = 0
    #ElapsedFrames = 0
    #FrameBuffer = 6
    constructor(config){
        this.#Position = config.position
        this.#Image = new Image()
        this.#Image.src = config.imageSrc ?? '' 
        this.#FrameRate = config.frameRate ?? 1
        this.#Image.onload = () => {
            this.#LoadedImage = true
            this.#Width = this.#Image.width / this.#FrameRate
            this.#Height = this.#Image.height  
        }
        
    }

    get WIDTH(){
        return this.#Width
    }
    get HEIGHT(){
        return this.#Height
    }
    UPDATE(EventUpdate){
        this.#ElapsedFrames++
        if(this.#ElapsedFrames % this.#FrameBuffer === 0 ){
        if(this.#CurrentFrame < this.#FrameRate - 1) this.#CurrentFrame++;
        else this.#CurrentFrame = 0
        }
    }
    DRAW(EventDraw){
        if(!this.#LoadedImage) return
        const cropBox = {
           position:{
            x:this.#Width * this.#CurrentFrame,
            y:0
           },
           width:this.#Width,
           height:this.#Height
        }
        EventDraw.drawImage(
            this.#Image,
            cropBox.position.x,
            cropBox.position.y,
            cropBox.width,
            cropBox.height, 
            this.#Position.x,
            this.#Position.y,
            this.#Width,
            this.#Height)
    }
}