class Chain {
    constructor(bodyA,bodyB) {
        var options = {
           bodyA:bodyA ,
           bodyB:bodyB,
           length:60,
           stiffness:0.2


        }
       this.chain = Constraint.create(options);
    }
    display(){
       line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }


 } 