
var movingRect, fixedRect;
var object1;

function setup()
{
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "blue";
  
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "red";

  object1 = createSprite(600, 200, 50, 50);
  object1.shapeColor = "lightGreen";
}



function isTouching(o1, o2)
{
  if(o1.x-o2.x <= o2.width/2+o1.width/2 
    && o2.x-o1.x <= o2.width/2+o1.width/2
    && o2.y-o1.y <= o2.height/2+o1.height/2
    && o1.y-o2.y <= o2.height/2+o1.height/2)
  {
    return true;
  }
  else
  {
    return false;
  }
}