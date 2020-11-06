function draw() 
{
  background(0,0,0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect, object1))
  {
    movingRect.shapeColor = "white";
    object1.shapeColor = "white";
  }
  else
  {
    movingRect.shapeColor = "blue";
    object1.shapeColor = "lightGreen";
  }
  
  drawSprites();
  
}