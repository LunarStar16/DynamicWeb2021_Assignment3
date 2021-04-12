var vidcapture, ctracker, drawcanvas;

function setup(){
    var cnv = createCanvas(windowWidth/2, windowHeight);
    cnv.parent("p5canvas");
    
    //p5 method for creating a video stream
    vidcapture = createCapture(VIDEO);
    vidcapture.size(vidcapture.width*2, vidcapture.height*3);
    vidcapture.hide();
    
    // start tracker
    ctracker = new clm.tracker()
    ctracker.init();
    ctracker.start(vidcapture.elt)
    //just for testing
    drawcanvas = document.getElementById('defaultCanvas0')
    
}

function draw(){
    
    background(153,230,255);
    translate(vidcapture.width, 0)
    scale(-1, 1)
    
//    image(vidcapture, 0, 0);
    
    var positions = ctracker.getCurrentPosition();
    
    if (positions){
//        ctracker.draw(drawcanvas);
        // all the fun with positions in here
    
        //background
        noStroke();
        fill(102,153,0);
        ellipse(positions[62][0]/-1, positions[62][1]/-1 +height*1.4, height/2, height*1.5);
        ellipse(positions[62][0]/-1 +width*1.75, positions[62][1]/-1 +height*1.4, height/2, height*1.5);
        ellipse(positions[62][0]/-1 +width*1.5, positions[62][1]/-1 +height*1.4, height/2, height*1.2);
        ellipse(positions[62][0]/-1 +width*1.2, positions[62][1]/-1 +height*1.4, height/2, height/1.2);
        ellipse(positions[62][0]/-1 +width/1.1, positions[62][1]/-1 +height*1.4, height/2, height/1.6);
        ellipse(positions[62][0]/-1 +width/1.6, positions[62][1]/-1 +height*1.4, height/2, height/1.2);
        ellipse(positions[62][0]/-1 +width/3.3, positions[62][1]/-1 +height*1.4, height/1.7, height*1.2);
        
        //eyes
        fill(0);
        ellipse(positions[27][0], positions[27][1],20);
        ellipse(positions[32][0], positions[32][1],20);
        
        //eyelashes
        stroke(1);
        strokeWeight(5);
        line(positions[63][0], positions[63][1], positions[63][0]-7, positions[63][1]-7);
        line(positions[67][0], positions[67][1], positions[67][0]+7, positions[67][1]-7);
        
        line(positions[28][0], positions[28][1], positions[28][0]-10, positions[28][1]-7);
        line(positions[23][0], positions[23][1], positions[23][0]+10, positions[23][1]-7);
        
        //nose
        triangle(positions[36][0], positions[36][1], positions[42][0], positions[42][1], positions[37][0], positions[37][1]);
        
        triangle(positions[37][0], positions[37][1], positions[43][0], positions[43][1], positions[38][0], positions[38][1]);
        
        //mouth
        line(positions[60][0], positions[60][1], positions[37][0], positions[37][1]);
        
        line(positions[50][0], positions[50][1], positions[59][0], positions[59][1]);
        line(positions[59][0], positions[59][1], positions[60][0], positions[60][1]);
        line(positions[60][0], positions[60][1], positions[61][0], positions[61][1]);
        line(positions[61][0], positions[61][1], positions[44][0], positions[44][1]);
        
        line(positions[50][0], positions[50][1], positions[58][0], positions[58][1]);
        line(positions[58][0], positions[58][1], positions[57][0], positions[57][1]);
        line(positions[57][0], positions[57][1], positions[56][0], positions[56][1]);
        line(positions[56][0], positions[56][1], positions[44][0], positions[44][1]);
        
        //ears
        noFill();
        arc(positions[16][0]+5, positions[16][1]-25, 40, 150, PI, TWO_PI, open);
        arc(positions[20][0]-5, positions[20][1]-25, 40, 150, PI, TWO_PI, open);
        
    }
    
    
}