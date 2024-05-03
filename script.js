
var canvas = document.querySelector('.canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');
var fCount = 201;

var cFrame = (index) => `./hh/${(index+1).toString()}.webp`;
var images = [];
let f = {frame : 0};


for(let i = 0; i < fCount; i++){
    var img = new Image ();
    img.src = cFrame(i);
    images.push(img);
}

gsap.to(f, {
    frame: fCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: true,
        pin: 'canvas',
        end: '600%',
    },
    onUpdate: render,
});

images[0].onload = render;

function render () {
    context.clearRect(0,0, canvas.width, canvas.height);
    context.drawImage(images[f.frame], 0, 0);
}


