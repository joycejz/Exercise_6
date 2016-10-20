function Bowties(c, strokeC) {
	this.x=0;
	this.y=0;
	this.col=c;
	this.strokeCol=strokeC;
	/*this.dots=false;
	this.dotsCol=color(255);
	this.stripes=false;
	this.stripesCol=color(255);*/

	this.updatePos=function(xPos,yPos) {
		this.x=xPos;
		this.y=yPos
	}

	/*this.dotsSwitch=function(c) {
		this.dotsCol=c;
		this.dots=!this.dots;
	}

	this.stripesSwitch=function(c) {
		this.stripesCol=c;
		this.stripes=!this.stripes;
	}
*/	
	//had to create blank function because couldn't check whether objects were an instance of DottedBowties or StripedBowties in the main code
	this.switch=function() {

	}

	this.display=function() {
		strokeWeight(1);
		stroke(this.strokeCol);
		fill(this.col);
		triangle(this.x, this.y, this.x-20, this.y-10, this.x-20, this.y+10);    //left half 
        triangle(this.x, this.y, this.x+20, this.y-10, this.x+20, this.y+10);    //right half
        rect(this.x, this.y, 10, 10, 3);    //thing in middle of bowtie

        /*if(this.dots) {
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

        if(this.stripes) {
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
        }*/
	}
}