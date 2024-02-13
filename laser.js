function Laser(spos, angle) {             //constrctor func.

  this.pos= createVector(spos.x, spos.y);  // position same as the ship position
  this.vel= p5.Vector.fromAngle(angle);    // velocity
  this.vel.mult(8);                        // speed of laser

  this.update=function () {                // update movement by velocity
    this.pos.add(this.vel);
  }
  this.render = function () {              // it will make the lesers appare by x y position

    push();

    
    stroke(255); // outline of laser
    strokeWeight(3);
    point(this.pos.x, this.pos.y);


    pop();

    
  }

  this.hits=function(asteroid){     // hit func.
    var d=dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y) // detect the distance between laser and asteroids
    if (d< asteroid.r){  // from distence we can detect collision
      return true;
    }else{
      return false;
    }
  }

  this.offscreen=function(){  // offscreen fucntion for laser // we wil omit if its offscreen
    // width
    if(this.pos.x > width || this.pos.x <0 ){  // if its postiion greater than width then its offscreen
      return true;
    }
  
    // height
    if(this.pos.y > height || this.pos.y <0 ){
      return true;
    }
    return false;
  }
  
}
