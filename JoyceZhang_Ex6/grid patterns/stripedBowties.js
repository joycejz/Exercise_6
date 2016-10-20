function StripedBowties(c, strokeC,stripesC) {
	Bowties.call(this,c,strokeC);
	this.stripesCol=stripesC;
	this.show=false;

	//turns stripes on and off
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

        //shows stripes
        if(this.show) {
        	strokeWeight(2);
            stroke(this.stripesCol);    //green
            //top stripes
            line(this.x-19,this.y-5,this.x-11,this.y-5);
            line(this.x+19,this.y-5,this.x+11,this.y-5);
            //middle stripes
            line(this.x-19,this.y,this.x-6,this.y);
            line(this.x+19,this.y,this.x+6,this.y);
            //bottom stripes
            line(this.x-19,this.y+5,this.x-11,this.y+5);
            line(this.x+19,this.y+5,this.x+11,this.y+5);
        }
    }
    StripedBowties.prototype=Object.create(Bowties.prototype);
    StripedBowties.prototype.constructor=Bowties;
}