//meme generator 
//J.nygaard 2023

const imageFileInput = document.querySelector("#imageFileInput");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");
const canvas = document.querySelector("#meme");

let image;

 //setting up all the event listeners 
imageFileInput.addEventListener("change",(e)=> {
    const imageDataUrl = URL.createObjectURL(e.target.files[0]);
    
    // html image element
    image = new Image();
    image.src = imageDataUrl;
    //event listener for image
    image.addEventListener("load",() =>{
        updateMemeCanvas(canvas,image,topTextInput.value,bottomTextInput.value);
    },
    {once:true}
    );
});

//event listener for bottom text
bottomTextInput.addEventListener ("change",() => {
    updateMemeCanvas (canvas, image, topTextInput.value, bottomTextInput.value);
});
//event listener for top text
topTextInput.addEventListener ("change",() => {
    updateMemeCanvas (canvas, image, topTextInput.value, bottomTextInput.value);
});
//making new function and assigning the text variables such as height width size offset
function updateMemeCanvas(canvas, image, topText, bottomText){
    const contexts = canvas.getContext ("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width /10);
    const offset = height / 15; // this will be the offset for the text from the top of image


    //updates to the canvas we made
    //canvas dimentions are going to be different then what CSS sees
    // So this will shrink or scale and set its own dimensions
    canvas.width = width;
    canvas.height = height;
    contexts.drawImage (image, 0,0);



    contexts.strokeStyle = "grey"; //back ground text
    contexts.lineWidth = Math.floor(fontSize /4 ); //this is the border
    contexts.fillStyle = "white"; //text color
    contexts.textAlign = "center"; //centering it in the image
    contexts.lineJoin = "round"; 
    contexts.font = `${fontSize}px serif`; //font style

    //bottom text
    contexts.textbaseline = "bottom"; //bottom text position
    contexts.strokeText (bottomText , width/2, height - offset);
    contexts.fillText(bottomText,width/2, height - offset);

    //top text
    contexts.textbaseline = "top"; //top text position
    contexts.strokeText (topText , width/2, offset);
    contexts.fillText(topText,width/2, offset);


    
}