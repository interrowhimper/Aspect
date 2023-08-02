const verbSets = {
  "glottal group": [
    "go²hwe²³li³Ɂa (s/he's writing)",
    "go¹we²³lị³Ɂa (I'm writing)",
    "u¹wo²hwe²³la³²nv²³Ɂi (s/he wrote)",
    "go²hwe²³li³²sgo³Ɂi (s/he's always writing)",
    "ho²hwe²lv¹ga (write!)",
    "ụ²wo²hwe²³lo³²di (for her/him to write)",
  ],
  
  "sg group": [
    "gv²tṿ³sga (s/he's putting it into a fire)",
    "gv¹dṿ³sga (I'm putting it into a fire)",
    "u¹wv²tạ³nv³Ɂi (s/he put it into a fire)",
    "gv²tṿ³sgọ³Ɂi (s/he's always putting it into a fire)",
    "hv²tv¹ga (put it into a fire!)",
    "ụ²wv²tdi (for her to put it into a fire)",
    "a¹lji³kwsga (s/he's spitting)",
    "gal²ji³kwsga (I'm spitting)",
    "ul¹ji³gwv²³Ɂi (s/he spat)",
    "al¹ji³kwsgo³Ɂi (s/he's always spitting)",
    "hal²ji¹kwa (spit!)",
    "ul²ji¹kwsdi (for her/him to spit)",
  ],

  "h group": [
    "a¹da²jạ²gạ²lị³ha (it's ripping)",
    "gạ²da²jạ²gạ²lị³a (I'm ripping)",
    "u¹da²jạ²gạ²lv²hv²³Ɂi (it ripped)",
    "a¹da²jạ²gạ²li²³sgọ³Ɂi (it's always ripping)",
    "hạ²dạjạ²gạ²la (rip!)",
    "u²da²jạ²gahl²di (for it to rip)",
    "a¹ga³lị²ha (it's shining)",
    "u¹ga³li²sv²³Ɂi (it shone)",
    "a¹ga³li²sgo³Ɂi (it's always shining)",
    "u²ga²li²³hị³sdi (for it to shine)",
    
  ],
  
  "g group": [
  "a¹dli³²ga (liquid is pouring into a container/it's filling)",
  "u¹dli³²jv²³Ɂi (liquid poured into a container/it filled)",
  "a¹dli³²go³Ɂi (liquid is always pouring into a container/it's always filling)",
  "u²dliy¹sdi (for liquid to pour into a container/for it to fill)",
  ],
  
  "causative":[
    "a¹dạ²di²³nv³²dị²ha (s/he's bouncing it)",
    "gạ²dạ²di²³nv³²dị²ha (I'm bouncing it)",
    "u¹dạ²di²³nv³²tạ²nv²³Ɂi (s/he bounced it)",
    "a¹da²di²³nv³²di²sgo³Ɂi (s/he's always bouncing it)",
    "hạ²dạ²di²³nv¹da (bounce it!)",
    "u²dạ²di²³nv³²doh²di (for her to bounce it)",
    ],
  
  "translocative":[
    "a¹dạ²de³ga (it's bouncing)",
    "gạ²dạ²de³ga (I'm bouncing)",
    "u¹dạ²di²³nv³²sv²³Ɂi (it bounced)",
    "a¹dạ²de³go³Ɂi (it's always bouncing)",
    "hạ²dạ²du¹ga (bounce!)",
    "u²dạ²di²³nv³²di (for it to bounce)",
    "gạɁ³le¹ga (s/he's climbing it)",
    "jịɁ³le¹ga (I'm climbing it)",
    "u¹lv³²sv²³Ɂi (s/he climbed it)",
    "gạɁ³le¹go³Ɂi (s/he's always climbing it)",
    "hịɁ²lu¹ga (climb it!)",
    "u²lv¹sdi (for her/him to climb it)",
    ],

  "applicative":[
    "a¹danh²tẹ³ha (s/he's thinking)",
    "gạ²da²nv¹tẹ³ha (I'm thinking)",
    "u¹danh²te²³hlv³Ɂi (s/he thought)",
    "a¹danh²te²³sgọ³Ɂi (s/he's always thinking)",
    "hạ²danh²tv²³la (think!)",
    "u²danh²teh²di (for her/him to think)",
    ],

  "repetitive":[
    "a¹danh²te²³hi³lọ²Ɂa (s/he's pondering/considering)",
    "gạ²da²nv¹te²³hi³lọ²Ɂa (I'm pondering/considering)",
    "u¹danh²te²³hi³lọ²Ɂv²³Ɂi (s/he pondered/considered)",
    "a¹danh²te²³hi²lo¹sgo³Ɂi (s/he's always pondering/considering)",
    "hạ²danh²te²hi²lo²³ja (ponder!/consider!)",
    "u²danh²te²hi²lo¹sdi (for her/him to ponder/consider)",
    ],

  "completive":[
    "a¹gọ³hṿ²sga (it's burning)",
    "gạ³gọ²hṿ³sga (I'm burning)",
    "u¹gọ²hnv²³Ɂi (it burned)",
    "a¹gọ³hṿ²sgo³Ɂi (it's always burning)",
    "hạ²gọ²hna (burn!)",
    "u²gọ³hṿ³sdi (for it to burn)",
    
    ],

  "locative/ambulative":[
    "gạɁ³li²do³ha (s/he's climbing around)",
    "jịɁ³li²do³ha (I'm climbing around)",
    "u¹li³do¹lv²³Ɂi (s/he climbed around)",
    "gạɁ³li²do³ho³Ɂi (s/he's always climbing around)",
    "hịɁ²li²³da (climb around!)",
    "u²li²³da³²sdi (for her/him to climb around)",
    "a¹da²hwah²tv²hi²³do³²ha (s/he's visiting)",
    "ga²da¹wah²tv²hi²³do³²ha (I'm visiting)",
    "u¹da²hwah²tv²hi²³do³²lv²³i (s/he visited)",
    "a¹da²hwah²tv²hi²³do³²ho³Ɂi (s/he's always visiting)",
    "hạ²da²hwah²tv²hi²da (visit!)",
    "u²da²hwah²tv²hi²³da³²sdi (for her/him to visit)",
    "a¹hi²³do³²ha (s/he's handling it/has it in her/his hand)"
    "jị²Ɂi²³do³²ha (I'm handling it/have it in my hand)",
    "u¹hi²³do³²lv²³Ɂi (s/he handled it/had it in her/his hand)",
    "a¹hi²³do³²ho³Ɂi (s/he's always handling it/always has it in her/his hand)",
    "hị²hi²³da (handle it!/have it in your hand!)",
    "u²hi²³da³²sdi (for her/him to handle it/for her/him to have it in her/his hand)",
    "a¹hlị³Ɂị²li²³do³²ha (it's taking time)",
    "u¹hlị³Ɂị¹li²³do³²lv²³Ɂi (it took time)",
    "a¹hlị³Ɂilido³²ho³Ɂi (it always takes time)",
    "u²hlị²Ɂị²li²³da³²sdi (for it to take time)",
   "da¹kạ²no²wạ²di²³do³²ha (s/he's looking after him/her)",
   "de²ji³ga¹no²wạ²di²³do³²ha (I'm looking after her/him)",
   "du¹kạ²no²wạ²di²³do³²lv²³Ɂi (s/he looked after her/him)",
   "da¹kạ²no²wạ²di²³do³²ho³Ɂi (s/he's always looking after her/him)",
   "ti²ga³²no²wạ²di²³da (look after her/him!)",
   "ju²kạ²no²wạ²di²³da³²sdi (for her/him to look after her/him)",
    ],

  "frequentive/recurring":[
    "gạɁ³ni²sị³ha (s/he's burying him/her)",
    "ji³ni²sị³ha (I'm burying him/her)",
    "u¹ni³sạ²hnv²³Ɂ (s/he buried him/her)",
    "gạɁ³ni²si²³sgọ³Ɂi (s/he's always burying him/her)",
    "hi²ni²³sa (bury him!)",
    "u²ni²³soh³di (for him/her to bury him/her)",
    
    ]
  
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

  // ... (Rest of the code remains the same)

// Helper function to activate the "Reveal" button when pressing Enter in the input box
inputAspect.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    revealButton.click();
  }
});

  
  aspectResult.textContent = `"${currentAspect}"`;
});
