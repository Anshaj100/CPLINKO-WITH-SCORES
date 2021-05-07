class Ball
{
	constructor(x,y,r)
	{
		var options={
			
			restitution:0.4,
			
			}
		
		this.r=r
		
		this.body=Bodies.circle(x,y,this.r,options)
        this.color = color (random(0,255),random(0,255),random(0,255))
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;
            		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			 rotate(this.body.angle)
			fill(255,0,255)
					ellipseMode(RADIUS)
			ellipse( 0,0,this.r*2, this.r*2)
			pop()
			
	}

}