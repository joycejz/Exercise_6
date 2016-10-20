function DottedBowties(c, strokeC, dotsC) {
	Bowties.call(this,c,strokeC);
	this.dotsCol=dotsC;
	this.show=false;

	//turns dots on and off
	this.switch=function() {
		this.show=!this.show;
	}

	this.display=function() {
		strokeWeight(1);
		stroke(this.strokeCol);
		fill(this.col);
		triangle(this.x, this.y, this.x-20, this.y-10, this.x-20, this.y+10);    //left half 
        triangle(this.x, this.y, this.x+20, this.y-10, this.x+20, this.y+10);    //right half
        rect(this.x, this.y, 10, 10, 3);    //thing in middle of bowtie

        //shows dots
        if(this.show) {
        	noStroke();
	        fill(this.dotsCol);    //green
	        //middle dots
	        ellipse(this.x-10,this.y,3,3);
	        ellipse(this.x+10,this.y,3,3);
	        //top dots
	        ellipse(this.x-15,this.y-5,3,3);
	        ellipse(this.x+15,this.y-5,3,3);
	        //bottom dots
	        ellipse(this.x-15,this.y+5,3,3);
	        ellipse(this.x+15,this.y+5,3,3);
        }
    }

    DottedBowties.prototype=Object.create(Bowties.prototype);
    DottedBowties.prototype.constructor=Bowties;
}