class Umbrella{
    constructor(x,y){
var options={
    isStatic:true
}
this.boy= loadImage("3.png")
this.umbrella= Bodies.circle(x,y,50,options)
this.radius=50
World.add(world,this.umbrella)
    }
display(){
    imageMode(CENTER)
    image(this.boy,this.umbrella.position.x, this.umbrella.position.y,300,300)

}
}