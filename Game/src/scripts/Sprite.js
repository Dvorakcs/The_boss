class Sprite{
    #Position = null
    #Image = null
    #LoadedImage = false
    constructor(config){
        this.#Position = config.position
        this.#Image = new Image()
        this.#Image.src = config.imageSrc 
        this.#Image.onload = () => {
            this.#LoadedImage = true
        }
    }

    DRAW(EventDraw){
        if(!this.#LoadedImage) return
        EventDraw.drawImage(this.#Image, this.#Position.x,this.#Position.y)
    }
}