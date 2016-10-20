function Emojis(sad, happy, mouthType) {
	this.x=0;
	this.y=0;
	this.sadCol=sad;
	this.happyCol=happy;
	this.mouth=mouthType;

	this.updatePos=function(xPos,yPos) {
		this.x=xPos;
		this.y=yPos
	}

	/*this.changeExpression=function(c, m) {
		this.color=c;
		this.mouth=m;
	}*/

	this.display=function() {
		if (mouseIsPressed) {
			fill(this.happyCol);
		} else {
			fill(this.sadCol);
		}

        ellipse(this.x, this.y, 45, 45);    //face
        fill(50);    //grey
        ellipse(this.x-10,this.y-5,5,5);    //left eye
        ellipse(this.x+10,this.y-5,5,5);    //right eye

        if (this.mouth=="normal") {
        	if (mouseIsPressed) {
        		noFill();
            	arc(this.x,this.y,30,30,radians(20),radians(160));    //:) (smile)
            } else {
            	noFill();
            	arc(this.x,this.y+18,30,30,radians(200),radians(340));    //): (frown)
            }
        } else if (this.mouth=="super") {
        	if (mouseIsPressed) {
        		fill(255);    //white
            	arc(this.x,this.y,30,30,radians(20),radians(160),CHORD);    //:D (super happy smile)
        	} else {
        		fill(255);    //white
            	arc(this.x,this.y+18,30,30,radians(200),radians(340),CHORD);    //D: (super sad frown)
        	}
        }
	}
}