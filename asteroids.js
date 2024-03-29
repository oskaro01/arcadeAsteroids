
function Asteroid(pos, r){  //constructor func. // position and size

  if (pos){  
    // position of astroid after breaking up
    this.pos=pos.copy(); // copy vector(objects) or else it will cause problem cause those vector will point to  -> . <- same objects
  } else {
    this.pos=createVector(random(width), random(height)); // using vec for pos //inital state
  }
  if (r) {
    this.r= r*0.5;  // size of astroid after breaking up
  } else{
    this.r= random(50,50); // random size
  }


  
  // GIVING THE ASTEROIDS ITS MOVEMENT CAPABILITY
  this.vel= p5.Vector.random2D(); // vel of object ,,moving random direction


  
  this.total= floor(random(5, 15)); //for random vertecies(angular points)
  this.offset=[]; // distance angular points // location of a point on a graph 
  
  for(var i=0; i< this.total; i++){
    this.offset[i]= random(-this.r*0.5, this.r*0.5); //for each spot in the arr //anguler points distance
  }

  this.update= function(){  // movement by velocity
    this.pos.add(this.vel);   
    //this.vel.mult();
  }

  this.render= function(){  // showing aste shape(vertex x y) in display 
    push(); // saving state continusly
    stroke(255);  // outline of asteroids
    noFill();
     translate(this.pos.x, this.pos.y); // position in x y graph
   

     beginShape();  // random shape from x y points for asteroids
    
     for ( var i=0; i<this.total; i++){

       var angle= map(i,0,this.total,0,TWO_PI); // p5 MAP FUNC. to get an angle // 360deg = TWO_PI  // 0 to this.total // 0 to TWO_PI

       var r= this.r + this.offset[i]; 
       //converting poler to cartesian coordinate system from var angle
       var x= r * cos(angle); // for map
       var y= r * sin(angle);  // for map

       //a meeting point of two lines that form an angle.
       vertex(x,y); // func to take angular points(vertex)

       
     }
     endShape(CLOSE); // to close angular points // asteroid points shape
     pop();  // storing states
  }

  this.breakup= function(){   // break into new 2smaller asteroids at SAME POINT or position
    var newA=[];
    newA[0]= new Asteroid(this.pos, this.r);
    newA[1]= new Asteroid(this.pos, this.r);
    newA[2]= new Asteroid(this.pos, this.r);
    return newA; // returning new smaller asteroids
  }

   this.edges=function(){
    if(this.pos.x > width + this.r){
      this.pos.x = -this.r;
    }else if(this.pos.x <-this.r){
      this.pos.x = width + this.r;
    }
  

    if(this.pos.y > height + this.r){
      this.pos.y = -this.r;
    }else if(this.pos.y <-this.r){
      this.pos.y = height + this.r;
    }
  }

}