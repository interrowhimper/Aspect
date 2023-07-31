const verbSets = {
  "glottal": [
    "go²hwe²³li³Ɂa (writing)",
    "go¹we²³lị³Ɂa",
    "u¹wo²hwe²³la³²nv²³Ɂi",
    "go²hwe²³li³²sgo³Ɂi",
    "ho²hwe²lv¹ga",
    "ụ²wo²hwe²³lo³²di",
  ],
  "sg": [
    "gv²tṿ³sga (putting it into a fire)",
    "gv¹dṿ³sga",
    "u¹wv²tạ³nv³Ɂi",
    "gv²tṿ³sgọ³Ɂi",
    "hv²tv¹ga",
    "ụ²wv²tdi",
  ],
  // Add more sets here with their respective aspects
};

const verbCanvas = document.getElementById("verbCanvas");
const randomButton = document.getElementById("randomButton");
const inputAspect = document.getElementById("inputAspect");
const revealButton = document.getElementById("revealButton");
const aspectResult = document.getElementById("aspectResult");

let currentVerb = null;
let currentAspect = null;

function getRandomWord(verbSets) {
  return verbSets[Math.floor(Math.random() * verbs.length)];
}

randomButton.addEventListener("click", function () {
  const randomSet = getRandomWord(Object.keys(verbSets));
  currentVerb = getRandomWord(verbSets[randomSet]);
  currentAspect = randomSet;
  verbCanvas.textContent = currentVerb;
  aspectResult.textContent = ''; // Clear previous result when generating a new word
});

function drawWord(canvas, word) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "24px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(currentVerb, canvas.width / 2, canvas.height / 2);
}

revealButton.addEventListener("click", function () {
  const userInput = inputAspect.value.trim();
  
  aspectResult.textContent = `"${currentAspect}"`;
 
});
