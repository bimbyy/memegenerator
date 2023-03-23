
// Setting up all the const so that we can use later
const urlInput = document.getElementById('url-input');
const topTextInput = document.getElementById('top-text-input');
const bottomTextInput = document.getElementById('bottom-text-input');
const generateMemeBtn = document.getElementById('generate-meme-btn');
const memeContainer = document.getElementById('meme-container');

// Generating meme
function generateMeme() {
  // what are the values?
  const url = urlInput.value;
  const topText = topTextInput.value;
  const bottomText = bottomTextInput.value;
  //validating input
  if (!url || !topText || !bottomText){
    alert('Please fill out all fields');
    return;
  }
  if (!isValidUrl(url)){
    alert('Please enter a valid URL');
    return;
  }
  
  // Creating image
  const memeImg = document.createElement('img');
  memeImg.src = url;

  // Creating text
  const topTextDiv = document.createElement('div');
  topTextDiv.innerText = topText;
  const bottomTextDiv = document.createElement('div');
  bottomTextDiv.innerText = bottomText;
  bottomTextDiv.classList.add('bottom-text'); // add the bottom-text class

  // Creating the container
  const memeDiv = document.createElement('div');
  memeDiv.classList.add('meme');
  memeDiv.appendChild(memeImg);
  memeDiv.appendChild(topTextDiv);
  memeDiv.appendChild(bottomTextDiv);

  // Remove button creation
  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.addEventListener('click', () => {
    memeDiv.remove();
  });
  memeDiv.appendChild(removeBtn);

  // Add the meme to the container
  memeContainer.appendChild(memeDiv);
}

// Attach the generateMeme function to the button click event
generateMemeBtn.addEventListener('click', generateMeme);
//Function for checking if valid
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}