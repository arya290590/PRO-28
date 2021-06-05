class launcher{

constructor(bodyA,pointB){

var options = {

  bodyA: bodyA,
  pointB: pointB,
  stiffness:0.03,
  length: 15  


}

this.pointB = pointB
this.Launcher = Constraint.create(options);
World.add(world,this.Launcher)




}

fly(){

this.Launcher.bodyA = null;

}


attach(body){
    this.Launcher.bodyA = body
  }

display(){

    if(this.Launcher.bodyA){
        var pointA = this.Launcher.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        line(pointA.x-10, pointA.y, pointB.x-0, pointB.y);
        pop();
    }

    
}




}