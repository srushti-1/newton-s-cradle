class Rope{
	constructor(bodyA,pointB)
	{
		
		var options={
			bodyA:bodyA,
			pointB:pointB,
			length:200
		}
		this.pointB = pointB;
		this.pointX = bodyA.x;
		this.pointY = bodyA.y - 250;
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		if(this.rope.bodyA){
		var pointA=this.rope.bodyA.position;
		var pointB=this.pointB;

		strokeWeight(2);

		push();
		line(pointB.x, pointB.y, pointA.x, pointA.y);
		pop();
	}
}

}