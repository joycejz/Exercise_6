var choice=0;
var bowties=new Array(89);
var normalEmojis=new Array(50);
var superEmojis=new Array(50);

function setup() {    //use function instead of void
  createCanvas(500, 500);
  //give the user a menu
  textAlign(CENTER);
  textSize(15);
  textStyle(BOLD);
  text("Press which number you would like to see:",250,50);
  textStyle(NORMAL);
  text("1: Chevron (click to add a color to the pattern)",250,80);
  text("2: Hearts",250,110);
  text("3: Sparkles (move your mouse around to change the colors)",250,140);
  text("4: Bowties (press 'space' or click to give the bowties patterns)",250,170);
  text("5: Poles",250,200);
  text("6: Emojis (click to change make the emojis smile!)",250,230);
  text("ENJOY! c:",250,260);

  for (var i=0; i<bowties.length; i++) {
    bowties[i]=new Bowties(color(255,185,100),color(175,70,0));
  }

  for (var j=0; j<normalEmojis.length; j++) {
    normalEmojis[j]=new Emojis(color(0,200,255),color(255,185,0),"normal");
  }

  for (var k=0; k<superEmojis.length; k++) {
    superEmojis[k]=new Emojis(color(0,120,255),color(255,255,0),"super");
  }
}

function draw() {

  //CHEVRON
  if (choice==1) {
    frameRate(60);
    var purple = true;    //all data types changed to var
    strokeWeight(1);
    background(240,245,255);    //light blue background
    for (var y=0; y<height+50; y+=50) {    //space out the pattern vertically
      for (var x=0; x<width; x+=5) {    //space out the lines horizontally
        //makes every other stroke green when mouse is pressed
        if(mouseIsPressed===true) {     //use mouseIsPressed instead of mousePressed, use triple =
          purple = !purple;
        }
        //the lines will switch direction and thickness every 5 lines
        line(x, y, x, y+25);    //draw a vertical line
        if (x%50 < 25) {
          strokeWeight(2);
          if (purple) {
            stroke(90,30,130);    //dark purple
          } else {
            stroke(15,85,100);    //dark blue-green
          }
          y-=5;
        } else {
          strokeWeight(1); 
          if (purple) {
            stroke(250,125,190);    //pink
          } else {
            stroke(20,230,85);    //green
          }
          y+=5;
        }
      }
    }
  }

  //HEARTS
  if (choice==2) {
    background(235,250,255);    //light blue background
    frameRate(3);    //the shades of pink will change slowly
    var x=0;
    for (var y=30; y<height-30; y+=20) {
      //staggers the pattern so the hearts fit like puzzle pieces
      if (y%40==10) {
        x=50;
      } else {
        x=95;
      }
      while (x<width-10) {
        //draw the top third (peaks) of each heart
        strokeWeight(1);    //thinnest lines
        stroke(255,random(171,256),random(205,256));    //random light pink
        for (var i=0; i<4; i++) {
          line((x-30)+i*(30/8), y-i*5, x-i*(30/8), y-i*5);    //left peak
          line(x+i*(30/8), y-i*5, (x+30)-i*(30/8), y-i*5);    //right peak
        }
        //draw the middle third of each heart
        for (var k=1; k<5; k++) {
          strokeWeight(2);    //medium lines
          stroke(255,random(86,170),random(154,205));    //random medium pink
          line((x-30)+k*(30/8), y+k*5, (x+30)-k*(30/8), y+k*5);
        }
        //draw the bottom third of each heart
        for (var j=1; j<4; j++) {
          strokeWeight(4);    //thickest lines
          stroke(255,random(1,86),random(102,154));    //random dark pink
          line((x-15)+j*(30/8), (y+20)+j*5, (x+15)-j*(30/8), (y+20)+j*5);
        }
        x+=90;
      }
    }
  }

  //SPARKLES
  if (choice==3) {
    frameRate(60);
    noStroke();
    background(255);    //white background
    for (var y=0; y<=height; y+=25) {
      var x=0;
      //staggers the pattern so the ellipses overlap and their colors alternate
      if (y%50==25) {
        x=0;
        fill(mouseX/4+125, 0, 100,150);    //red gets brighter from left to right
      } else {
        x=12.5;
        fill(100, 0, mouseY/4+125,150);    //blue gets brighter from top to bottom
      }
      while (x<=width) {
        ellipse(x, y, 25, 50);    //draw ellipses
        x+=25;
      }
    }
  }

  //BOWTIES
  if (choice==4) {
    frameRate(60);
    strokeWeight(1);
    rectMode(CENTER);
    background(240,255,235);    //light green background
    for (var x=50; x<width-25; x+=50) {
      if (x<=250) {
        var i=0;
        for (var y=x; y<=(height-x); y+=25) {
          bowties[i].updatePos(x,y);
          bowties[i].display();
          i++;
        }
      } else {
        for (var y=x; y>=(height-x); y-=25) {
          bowties[i].updatePos(x,y);
          bowties[i].display();
          i++;
        }
      }
    }
    //user can give the bowties patterns
    if (mouseIsPressed) {    //gives dots when mouse is clicked
      for (var i=0; i<bowties.length; i++) {
        bowties[i].dotsSwitch(color(20,145,0));
      }
    } else if (keyIsPressed) {    //gives stripes when spacebar is pressed
      if (key==' ') {
        for (var i=0; i<bowties.length; i++) {
          bowties[i].stripesSwitch(color(20,145,0));
          //bowties[i].display();
        }
      }
    }
  }

  //POLES
  if (choice==5) {
    frameRate(60);
    strokeWeight(2);
    background(255);    //white background
    var r=0.0;
    var g=100.0;
    var b=10.0;
    for(var y=0; y<=height; y+=50) {    //makes a new pole every ~100 px
      if(y%100==50) {    //top half of pole
        for(var i=5; i<=50; i*=1.2) {    //gives depth (makes lines further apart in middle of pole)
          stroke(r+3.5*i,g+3.5*i,b+3.5*i);    //dark green when lines are closer together
          line(0,i+y,500,i+y);                //light green when lines are farther apart
        }
      } else {    //bottom half of pole
        for(var i=50; i>=3; i/=1.2) {    //gives depth (makes lines further apart in middle of pole)
          stroke(r+3.5*i,g+3.5*i,b+3.5*i);    //dark green when lines are closer together
          line(0,(50-i)+y,500,(50-i)+y);      //light green when lines are farther apart
        }
      }
    }
  }

  //EMOJIS
  if (choice==6) {
    frameRate(60);
    strokeWeight(1);
    stroke(0);
    background(255);
    var face = 1;
    for (var x=25; x<width; x+=50) {
      var i=0;
      for (var y=25; y<height; y+=50) {
        //types of faces will alternate row by row
        if(face==1) {
          superEmojis[i].updatePos(x,y);
          superEmojis[i].display();
          face=2;
        } else if(face==2) {    //sad faces will turn varo happy faces if mouse is clicked
          normalEmojis[i].updatePos(x,y);
          normalEmojis[i].display();
          face=1;
        }
        i++;
      }
    }
  }
}

//switches between the options
function keyPressed() {
  if (key == '1') {
    background(255);
    choice=1;
  } else if (key == '2') {
    background(255);
    choice=2;
  } else if (key == '3') {
    background(255);
    choice=3;
  } else if (key == '4') {
    background(255);
    choice=4;
  } else if (key == '5') {
    background(255);
    choice=5;
  } else if (key == '6') {
    background(255);
    choice=6;
  }
}