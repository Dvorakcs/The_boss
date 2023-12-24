window.onload = () => {
    var game = new Game({
        scene: new Scene({
            maps: new Maps({
                tiles: [new Tile({
                    position:{x:140,y:400},
                    width: 32,
                    height:32
                }), 
              
            ]
            }),
            players: [
                new GameObjects({
                 position:{x:50,y:50},
                 width: 20,
                 height:36
            })],
            controller: new Controller()
        })
    })
   Start(game)
}

function Start(game){
    game.START({});
    Update(game)
}

function Update(game){
   // console.log(game)
    game.UPDATE({})
    Draw(game)
    requestAnimationFrame(() => Update(game))
}

function Draw(game){
   // console.log('Draw')
   document.getElementById("canvas").getContext("2d").clearRect(0,0,1220,500)
   game.DRAW(document.getElementById("canvas").getContext("2d"))
}
function Stop(){
    
}