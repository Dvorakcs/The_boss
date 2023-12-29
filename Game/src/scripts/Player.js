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
    #Sprite = null
    constructor(config){
        this.#Position = config.position ?? {  x:0,y:0}
        this.#Width = config.width ?? 0
        this.#Height = config.height ?? 0
        this.#Sprite = new Sprite({
            position:this.#Position,
            imageSrc:'/Game/src/Image/king/idle.png'
        })
       
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
    
        if(EventUpdate.keySet.W.pressed && this.#Velocity.y === 0){
            this.#Velocity.y = -10
        }
        if(EventUpdate.keySet.A.pressed){
            this.#Velocity.x = -4
        }
        if(EventUpdate.keySet.D.pressed){
            this.#Velocity.x = 4
        }
        if(!EventUpdate.keySet.D.pressed && !EventUpdate.keySet.A.pressed){
            this.#Velocity.x = 0
        }
        this.#Position.y += this.#Velocity.y
        this.#Position.x += this.#Velocity.x

        this.#Sides.bottom = this.#Position.y + this.#Height + this.#Velocity.y
       
        if(this.#Sides.bottom + this.#Velocity.y < (64 * 9)){
            this.#Velocity.y += this.#Gravity
        }else {
            this.#Velocity.y = 0
        }


       
    }
    
    DRAW(EventDraw){
        EventDraw.fillStyle = 'red'
        EventDraw.fillRect(this.#Position.x,this.#Position.y,this.#Width,this.#Height)
        this.#Sprite.DRAW(EventDraw)
    }
}