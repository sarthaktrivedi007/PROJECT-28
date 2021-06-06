class Launcher {
    constructor(firstBody , secondPoint){
        var options = {
            bodyA:  firstBody,
            pointB : secondPoint,
            length : 10,
            stiffness : 0.04

        }

        this.launcher = Constraint.create(options)
        World.add(world,this.launcher)
       this.pointB = secondPoint
        
    }

    display()
    {
        if(this.launcher.bodyA != null){
        var  pointA = this.launcher.bodyA.position
        var pointB = this.pointB
        line (pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }

    fly()
    {
        this.launcher.bodyA = null;
    }
    
}