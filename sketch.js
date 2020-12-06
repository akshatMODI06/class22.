
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground,ball;

function setup() {
var canvas=createCanvas(1000,800);

myengine = Engine.create();
    myworld = myengine.world;

    var options={
      isStatic:true
    }

ground=Bodies.rectangle(200,390,300,20,options);
World.add(myworld,ground);

var ball_options ={
   restitution: 1.0
   }

ball=Bodies.circle(200,100,20,ball_options);
World.add(myworld,ball);

//console.log(box);
//console.log(box.type);
//console.log(box.position.x);
//console.log(box.position.y);
}

function draw() {
  background(0); 

  Engine.update(myengine);

  //rect(200,200,50,50); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,300,20)

  rectMode(RADIUS);
  circle(ball.position.x,ball.position.y,20);
}