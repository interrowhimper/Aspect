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

function getRandomWord(verbs) {
  return verbs[Math.floor(Math.random() * verbs.length)];
}

randomButton.addEventListener("click", function () {
  const randomSet = getRandomWord(Object.keys(verbSets));
  const randomWord = getRandomWord(verbSets[randomSet]);
  verbCanvas.textContent = randomWord;
  aspectResult.textContent = ''; // Clear previous result when generating a new word
});

revealButton.addEventListener("click", function () {
  const userInput = inputAspect.value.trim();
  let foundAspect = null;
  for (const aspect in verbSets) {
    if (verbSets[aspect].includes(userInput)) {
      foundAspect = aspect;
      break;
    }
  }

  if (foundAspect) {
    aspectResult.textContent = `The verb belongs to the "${foundAspect}" aspect.`;
  } else {
    aspectResult.textContent = "Invalid input or the verb does not belong to any known aspect.";
  }
});
