var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{  fabric.Image.fromURL("Birthdayimage.jpg", function(img)
{
    block_image_objective=img;

    block_image_objective.scaleToWidth(700);
    block_image_objective.scaleToHeight(510);
    block_image_objective.set({
        top:0,
        left:0
    });
    canvas.add(block_image_objective);
});

}

function playSound(){
    x.play();
	
}
