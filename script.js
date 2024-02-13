var ship;         // assignig main variables
var asteroids=[]; // array ,, because we need many asteroids
var lasers=[];
function setup(){ //  initial display environment 

  createCanvas(windowWidth=420, windowHeight=380);
  //createCanvas(windowWidth=920, windowHeight=740);
  ship = new Ship(); //making user-defined OBJ [ship] //NEW  // it will call the ship() cons func.
  for(var i=0; i<5; i++){
    asteroids.push(new Asteroid()); //NEW //push() func. add elements to arry 
  }
  
}

function draw(){  //for printing everything on the screen
  background(0);
 


  for(var i=0; i< asteroids.length; i++){ //using those func for each asteroids // .length is arr length ,,it is related to arry

    if(ship.hits(asteroids[i])){ //collision detec
      console.log('GAME OVER!');
    }
    asteroids[i].render(); //calling func 
    asteroids[i].update();
    asteroids[i].edges();
  }

    for(var i=lasers.length-1; i>=0; i--){  // loop for laser   // approach to loop backward using a for-loop starting from the end of the array towards the beginning of the array.// cause when new things added we dont need to check everything 
    lasers[i].render();
    lasers[i].update();

      
    if (lasers[i].offscreen()){      // if offscreen then get rid of it      
         lasers.splice(i,1);  
      } else {  // in screen check if laser hiting asteroids or not
      
      for(var j=asteroids.length-1; j>=0; j--){ // asteroid loop in laser loof
      if (lasers[i].hits(asteroids[j])){      // detecting collision for every single asteroids
        if(asteroids[j].r>10){  // seting a certain point where the small asteriod will dissapare
          
        
        var newAsteroids= asteroids[j].breakup(); // func. for breaking the asteroids
        //console.log(newAsteroids);
        asteroids= asteroids.concat(newAsteroids); // returning broken the pieces   // concat to merge two or more arrays
        
        } 
        //console.log(asteroids); // to check
        asteroids.splice(j,1);  // splice adds/removes array elements  // asteroid j  // laser i
        lasers.splice(i,1);  
        break;
        
      }
      }

    }
    
  }

   //console.log(lasers.length);
  
   ship.render(); //calling func render shape
  ship.turn();  // to turn by arrow key 
  ship.update();
  ship.edges(); //coming back
  
}




function keyReleased(){   // global arrow keys  
  ship.setRotation(0);   //  ( a )
  ship.boosting(false);  // hold key to move
}

function keyPressed(){        //special func  //global function 

  if (key == ' '){   //fr shooting

    
    lasers.push(new Laser(ship.pos, ship.heading)); // creating a leser where the ship is and from the head
  }

  else if (keyCode== RIGHT_ARROW){ 
   ship.setRotation(0.1);            //rotation speed in the [for angle a  ]parameter
  } else if (keyCode == LEFT_ARROW){
    ship.setRotation(-0.1);
  }else if(keyCode==UP_ARROW){
      //ship.boost();
       ship.boosting(true);  //  hold key to move 
  }

  
}
 