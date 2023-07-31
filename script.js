const verbSets = {
  "glottal": [
    "go²hwe²³li³Ɂa (writing)",
    "go¹we²³lị³Ɂa (writing)",
    "u¹wo²hwe²³la³²nv²³Ɂi (writing)",
    "go²hwe²³li³²sgo³Ɂi (writing)",
    "ho²hwe²lv¹ga (writing)",
    "ụ²wo²hwe²³lo³²di (writing)",
  ],
  "sg": [
    "gv²tṿ³sga (putting it into a fire)",
    "gv¹dṿ³sga (putting it into a fire)",
    "u¹wv²tạ³nv³Ɂi (putting it into a fire)",
    "gv²tṿ³sgọ³Ɂi (putting it into a fire)",
    "hv²tv¹ga (putting it into a fire)",
    "ụ²wv²tdi (putting it into a fire)",
  ],
  "s": [
    ],
  "g"[
  ],
  "causative":[
    "a¹dạ²di²³nv³²dị²ha (s/he's bouncing it)",
    "gạ²dạ²di²³nv³²dị²ha (s/he's bouncing it)",
    "u¹dạ²di²³nv³²tạ²nv²³Ɂi (s/he's bouncing it)",
    "a¹da²di²³nv³²di²sgo³Ɂi (s/he's bouncing it)",
    "hạ²dạ²di²³nv¹da (s/he's bouncing it)",
    "u²dạ²di²³nv³²doh²di (s/he's bouncing it)",
    ],
  "translocative aspect":[
    "a¹dạ²de³ga (it's bouncing)",
    "gạ²dạ²de³ga (it's bouncing)",
    "u¹dạ²di²³nv³²sv²³Ɂi (it's bouncing)",
    "a¹dạ²de³go³Ɂi (it's bouncing)",
    "hạ²dạ²du¹ga (it's bouncing)",
    "u²dạ²di²³nv³²di (it's bouncing)",
    ],
  
  // Add more sets here with their respective aspects
};

const verbCanvas = document.getElementById("verbCanvas");
const canvasContext = verbCanvas.getContext("2d"); // Get the canvas 2D context
const randomButton = document.getElementById("randomButton");
const inputAspect = document.getElementById("inputAspect");
const revealButton = document.getElementById("revealButton");
const aspectResult = document.getElementById("aspectResult");

let currentVerb = null;
let currentAspect = null;

function getRandomWord(verbs) {
  return verbs[Math.floor(Math.random() * verbs.length)];
}

function drawWord(text) {
  // Clear the previous text on the canvas
  canvasContext.clearRect(0, 0, verbCanvas.width, verbCanvas.height);
  
  // Draw the new text on the canvas
  canvasContext.font = "20px Arial"; // Set the font size and family
  canvasContext.fillStyle = "black"; // Set the text color
  canvasContext.fillText(text, 10, 50); // You can change the position as needed
}

randomButton.addEventListener("click", function () {
  const randomSet = getRandomWord(Object.keys(verbSets));
  currentVerb = getRandomWord(verbSets[randomSet]);
  currentAspect = randomSet;
  drawWord(currentVerb); // Draw the randomly chosen word on the canvas
  aspectResult.textContent = ''; // Clear previous result when generating a new word
});

revealButton.addEventListener("click", function () {
  const userInput = inputAspect.value.trim();
  
  aspectResult.textContent = `"${currentAspect}"`;
});
