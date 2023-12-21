class Frame{
    backFrame = 0
    frame = 0
    nextFrame = 0
    maxFrame = 0

    time = 0
    timeMax = 0

    isMove = false

    direction = 0
    constructor(config){
        this.id = config.id
        this.backFrame = config.backFrame ?? 0
        this.frame = config.frame?? 0
        this.nextFrame = config.nextFrame?? 0
        this.maxFrame = config.maxFrame?? 0
        this.time = config.time ?? 0
        this.timeMax = config.timeMax ?? 20       
    }
    get FrameX(){
        return this.frame;
    }
    START(){

    }
    UPDATE(UpdateEvent){
        this.time++
        if(this.id == "Player"){
            this.isMove = UpdateEvent.isMove
            this.direction = UpdateEvent.direction
            
            if(!this.isMove){
                this.frame = this.direction == 0 ? 1:2;
            }
            if(this.isMove && this.direction == 0){
                if(this.time >= this.timeMax){
    
                    this.time = 0
                    this.backFrame = this.frame
                    this.frame++
                    this.nextFrame = this.frame + 1;
                }
        
                if(this.frame >= this.maxFrame){
                    this.frame = 0 
                    
                }
            }else if(this.isMove && this.direction == 1){

                if(this.time >= this.timeMax){
    
                    this.time = 0
                    this.backFrame = 2
                    this.frame++
                    this.nextFrame = this.frame + 1;
                }
        
                if(this.frame >= this.maxFrame + 2){
                    this.frame = this.backFrame
                    
                }
            }
                
            
        }
       
        
      
    }
    DRAW(){

    }
    STOP(){

    }
}