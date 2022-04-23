img = "";

function preload()
{
 img = loadImage('https://www.wisebread.com/files/fruganomics/imagecache/605x340/blog-images/empty_glass_bottles_000056169688.jpg')
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill('#FF0000');
    text('Desk',45,75);
    noFill();
    stroke('#FF0000');
    rect(30, 60, 450, 350);
}