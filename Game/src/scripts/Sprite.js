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
    #Animations = null
    constructor(config){
        this.#Position = config.position
        this.#Image = new Image()
        this.#Image.src = config.imageSrc ?? '' 
        this.#FrameRate = config.frameRate ?? 1
        this.#Animations = config.animations
        if(this.#Animations != null || this.#Animations != undefined){
            for (let key in this.#Animations){
                const image = new Image();
                image.src = this.#Animations[key].imageSrc
                this.#Animations[key].image = image
            }
            console.log(this.#Animations)
        }
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
    set UpdateAnimationsSprite(imageName){
        if(this.#Animations != null || this.#Animations != undefined){
            if(this.#Image === this.#Animations[imageName].image) return
            this.#CurrentFrame = 0
            this.#Image = this.#Animations[imageName].image
            this.#FrameRate = this.#Animations[imageName].frameRate
            this.#FrameBuffer = this.#Animations[imageName].frameBuffer
        }
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