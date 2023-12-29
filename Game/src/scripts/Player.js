class Player{
    #Position = {
        x:0,
        y:0
    };

    #Width = 0;
    #Height = 0;
    #Sides = {
        bottom:this.#Position.y + this.#Height,
        top:this.#Position.y,
        left:this.#Position.x,
        right:this.#Position.x + this.#Width
    }
    constructor(config){
        this.#Position = config.position ?? {  x:0,y:0}
        this.#Width = config.width ?? 0
        this.#Height = config.height ?? 0
        
       
    }

    get Position(){
        return this.#Position;
    }
    get Width(){
        return this.#Width;
    }
    get Height(){
        return this.#Height;
    }

    UPDATE(EventUpdate){
        
        if(this.#Sides.bottom < (64 * 9)){
            this.#Sides.bottom = this.#Position.y + this.#Height
           
            this.#Position.y += 2
        }
       
    }
    
    DRAW(EventDraw){
        EventDraw.fillStyle = 'red'
        EventDraw.fillRect(this.#Position.x,this.#Position.y,this.#Width,this.#Height)
    }
}