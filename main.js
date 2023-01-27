window.addEventListener("keydown", myKeyDown);

var canvas= new fabric.Canvas ("myCanvas");

 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "Img";

function newimage(getImage){



	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
	
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
		top:block_y,
		 left:block_x
		});
	
		canvas.add(block)
	
	})
	}
	// para enviar imagens


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if (keyPressed == "73") 
	blockX = 150;

	new_image=('rr1.png')
	console.log("i")




{
		// enviar ranger escarlate
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		// enviar ranger verde
		new_image("gr.png")
		console.log("v")
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		// enviar ranger amarelo
        new_image("yr.png")
		console.log("a")

	}
	if(keyPressed == '82')
	{
		blockX = 600;
		// enviar ranger rosa
		new_image("pr.png")
		console.log('r')
	}
	if(keyPressed == "73")
	{
		blockX = 700;
	// enviar ranger índigo


	new_image("br.png")
	console.log("i")
	}
	   


}

