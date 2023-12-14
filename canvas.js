var canvas = document.getElementById('canvas');
var pen = canvas.getContext("2d")
pen.fillStyle="red";
pen.fillRect(40,20,220,40)

pen.fillStyle="white";
pen.fillRect(40,52,220,40)

pen.fillStyle="black";
pen.fillRect(40,80,220,34)




var image = document.getElementById("image");
var pen = canvas.getContext("2d")

image = new Image();
image.src = '620151211054752.jpg';
image.onload = function() {
    const newWidth = 60; 
    const newHeight = 20; 
    pen.drawImage(image, 120, 55, newWidth, newHeight);
};




