var playerFunctions =
{

movePlayerLR:function(playerObject,movementNumber)
{
  playerObject.body.velocity.x = movementNumber;
},

movePlayerUD:function(playerObject,movementNumber)
{
  playerObject.body.velocity.y = movementNumber;
}
}
