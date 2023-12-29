class Player{
    #Position = {
        x:0,
        y:0
    };
    #Velocity = {
        x:0,
        y:0
    }
    #Width = 0;
    #Height = 0;
    #Sides = {
        bottom:this.#Position.y + this.#Height,
        top:this.#Position.y,
        left:this.#Position.x,
        right:this.#Position.x + this.#Width
    }
    #Gravity = 1
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
        this.#Position.y += this.#Velocity.y
        if(this.#Sides.bottom + this.#Velocity.y < (64 * 9)){
            this.#Velocity.y += this.#Gravity
            this.#Sides.bottom = this.#Position.y + this.#Height + this.#Velocity.y
        }else {
            this.#Velocity.y = 0
        }
       
    }
    
    DRAW(EventDraw){
        EventDraw.fillStyle = 'red'
        EventDraw.fillRect(this.#Position.x,this.#Position.y,this.#Width,this.#Height)
    }
}