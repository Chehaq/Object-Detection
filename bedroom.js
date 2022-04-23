img = "";

function preload()
{
 img = loadImage('https://www.thespruce.com/thmb/rmDEwUoAgwucuusBRvFoE4JBc0o=/4000x2250/smart/filters:no_upscale()/master-bedroom-in-new-luxury-home-with-chandelier-and-large-bank-of-windows-with-view-of-trees-1222623844-212940f4f89e4b69b6ce56fd968e9351.jpg')
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill('#FF0000');
    text('',45,75);
    noFill();
    stroke('#FF0000');
    rect(30, 60, 450, 350);
}