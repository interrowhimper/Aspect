const verbSets = {
  "particle verb (standalone particles are making this verb; no root suffix per se)": [
    "u¹du³³ha (s/he's standing in liquid)",
    "a¹gwạ²dụ³ha (I'm standing in liquid)",
    "u¹du³sv²³Ɂi (s/he stood in liquid)",
    "u¹du³so³Ɂi (s/he's always standing in liquid)",
    "jạ²du³se³sdi (s/he's always standing in liquid)",
    "u¹duh²di (for her/him to stand in liquid)",
    ],
  
  "glottal group (root suffix is glottal in the present tense)": [
    "go²hwe²³li³Ɂa (s/he's writing)",
    "go¹we²³lị³Ɂa (I'm writing)",
    "u¹wo²hwe²³la³²nv²³Ɂi (s/he wrote)",
    "go²hwe²³li³²sgo³Ɂi (s/he's always writing)",
    "ho²hwe²lv¹ga (write!)",
    "ụ²wo²hwe²³lo³²di (for her/him to write)",
    "a¹dị³Ɂa (s/he's laying it down [long])",
    "jị²dị³Ɂa (I'm laying it down [long])",
    "u¹dv²³Ɂi (s/he laid it down [long])",
    "a¹di³²sgo³Ɂi (s/he's always laying it down [long])",
    "hị²da (lay it down! [long])",
    "u²di¹sdi (for her/him to lay it down [long])",
    "a¹hu²dị³Ɂa (s/he's putting a [long] object in a liquid)",
    "jị²Ɂu²dị³Ɂa (I'm putting a [long] object in a liquid)",
    "u¹hu³dv²³Ɂi (s/he put a [long] object in a liquid)",
    "a¹hu²di³²sgo³Ɂi (s/he's always putting a [long] object in a liquid)",
    "hị²hu²³da (put a [long] object in a liquid!)",
    "u²hu²³di³²sdi (for her/him to put a [long] object in a liquid)",
    "da¹sdu²dlị³Ɂa (s/he's sprinkling it with a [liquid])",
    "de²ji³²sdu²dlị³Ɂa (I'm sprinkling it with a [liquid])",
    "du¹sdu³dlv²³Ɂi (s/he sprinkled it with a [liquid])",
    "da¹sdu²dli³²sgo³Ɂi (s/he's always sprinkling it with a [liquid]",
    "tị²sdu³dla (sprinkle it with a [liquid]!)",
    "ju²sdu²dli¹sdi (for her/him to sprinkle it with a [liquid])",
    "gạ²ne²gi³Ɂa (s/he's getting it [liquid] or s/he's picking it up [liquid])",
    "jị²ne²gi³Ɂa (I'm getting it [liquid] or I'm picking it up [liquid])",
    "u¹ne²gi³sv²³Ɂi (s/he picked it up [liquid] or got it [liquid])",
    "gạ²ne²gi³sgo³Ɂi (s/he's routinely picking it up [liquid] or getting it [liquid])",
    "hị²ne²³gi (pick it up [liquid]! or get it! [liquid])",
    "u²ne²gi¹sdi (for her/him to pick it up [liquid] or get it [liquid])",
  ],
  
  "sg group (root suffix is sg in the present tense)": [
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
    "a¹hwị²sga (s/he's planting it)",
    "ji¹wị²sga (I'm planting it)",
    "u¹hwị²sv²³Ɂi (s/he planted it)",
    "a¹hwị²sgo³Ɂi (s/he planted it)",
    "hị²hwi (plant it!)",
    "u²hwị²sdi (for her/him to plant it)",
    "a¹le²hṿ³sga (s/he's standing in a certain spot)",
    "gạ²lẹ²Ɂṿ³sga (I'm standing in a certain spot)",
    "u¹le²hnv²³Ɂi (s/he stood in a certain spot)",
    "a¹le²hṿ²sgo³Ɂi (s/he's always standing in a certain spot)",
    "hạ²le²hv¹ga (stand in a certain spot!)",
    "u²leh²di (for her/him to stand in a certain spot)",
  ],

  "h group (root suffix is h in the present tense)": [
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
    "a¹dli²³ha (s/he's drawing liquid from a container or it's filling)",
    "u¹dli³²jv²³Ɂi (s/he drew liquid from a container or it filled)",
    "a¹dli³²go³Ɂi (s/he's always drawing liquid from a container or it's always filling)",
    "u²dliy¹sdi (for her/him to draw liquid from a container or for it to fill)",
    
  ],
  
  "g group (root suffix is g in the present tense)": [
   "a¹dli³²ga (liquid is pouring into a container/it's filling)",
   "u¹dli³²jv²³Ɂi (liquid poured into a container/it filled)",
   "a¹dli³²go³Ɂi (liquid is always pouring into a container/it's always filling)",
   "u²dliy¹sdi (for liquid to pour into a container/for it to fill)",
    "gạ²do³²ga (s/he's standing)",
    "jị²do³²ga (I'm standing)",
    "gạ²do³²go³Ɂi (s/he's always standing)",
    "hị²do³²ge³sdi (stand!)",
    "gạ²nv³ga (s/he's falling from an upright position)",
    "jị²nv³ga (I'm falling from an upright position)",
    "u¹nv³jv²³Ɂi (s/he fell from an upright position)",
    "gạ²nv³go²³Ɂi (s/he's always falling from an upright position)",
    "hị²nv¹gi (fall from an upright position!)",
    "u²nṿ²Ɂị³sdi (for her/him to fall from an upright position)",
    
  ],
  
  "causative aspect":[
    "a¹dạ²di²³nv³²dị²ha (s/he's bouncing it)",
    "gạ²dạ²di²³nv³²dị²ha (I'm bouncing it)",
    "u¹dạ²di²³nv³²tạ²nv²³Ɂi (s/he bounced it)",
    "a¹da²di²³nv³²di²sgo³Ɂi (s/he's always bouncing it)",
    "hạ²dạ²di²³nv¹da (bounce it!)",
    "u²dạ²di²³nv³²doh²di (for her to bounce it)",
    "anh¹dạ²dị³Ɂa (s/he's remembering it)",
    "ga²nv¹dạ²dị³Ɂa (I'm remembering it)",
    "unh¹dạ³dv²³Ɂi (s/he remembered it)",
    "anh¹dạ²di³²sgo³Ɂi (s/he's always remembering it)",
    "hanh²da²da (remember it!)",
    "unh²dạ²di¹sdi (for her/him to remember it)",
    "da¹leh²dị³ha (s/he's helping her/him up or standing it up)",
    "de²ji³yạ²le¹dị³ha (I'm helphing him/her up",
    "de²gạ³le¹dị³ha (I'm standing it up)",
    "du¹leh²tạ³nv³Ɂi (s/he helped him/her up or stood it up)",
    "da¹leh²di²³sgọ³Ɂi (s/he's always helping her/him up or standing it up)",
    "ti²yạ³le¹da (help him/her stand!)",
    "tạ²leh³da (stand it up!)",
    "ju²leh²doh³di (for her/him to help her/him stand or for him/her to stand it up)",
    ],
  
  "translocative aspect":[
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

  "applicative aspect":[
    "a¹danh²tẹ³ha (s/he's thinking)",
    "gạ²da²nv¹tẹ³ha (I'm thinking)",
    "u¹danh²te²³hlv³Ɂi (s/he thought)",
    "a¹danh²te²³sgọ³Ɂi (s/he's always thinking)",
    "hạ²danh²tv²³la (think!)",
    "u²danh²teh²di (for her/him to think)",
    "gạ²ne²gi³Ɂe²ha (s/he's taking it [liquid] from her/him/it)",
    "ji²ne²gi³Ɂe²ha (I'm taking it [liquid] from it/him/her)",
    "u¹ne²gi³Ɂe²lv²³Ɂi (s/he took it [liquid] from him/her/it)",
    "gạ²ne²gi³Ɂe²ho³Ɂi (s/he's always taking it [liquid] from her/him/it)",
    "hi²ne²gi¹si (take it [liquid] from her/him/it!)",
    "u²ne²gị²Ɂeh³di (for her/him to take it [liquid] from her/him/it)",
    
    ],

  "repetitive aspect":[
    "a¹danh²te²³hi³lọ²Ɂa (s/he's pondering/considering)",
    "gạ²da²nv¹te²³hi³lọ²Ɂa (I'm pondering/considering)",
    "u¹danh²te²³hi³lọ²Ɂv²³Ɂi (s/he pondered/considered)",
    "a¹danh²te²³hi²lo¹sgo³Ɂi (s/he's always pondering/considering)",
    "hạ²danh²te²hi²lo²³ja (ponder!/consider!)",
    "u²danh²te²hi²lo¹sdi (for her/him to ponder/consider)",
    ],

  "completive aspect":[
    "a¹gọ³hṿ²sga (it's burning)",
    "gạ³gọ²hṿ³sga (I'm burning)",
    "u¹gọ²hnv²³Ɂi (it burned)",
    "a¹gọ³hṿ²sgo³Ɂi (it's always burning)",
    "hạ²gọ²hna (burn!)",
    "u²gọ³hṿ³sdi (for it to burn)",
    
    ],

  "locative/ambulative aspect":[
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
    "a¹hi²³do³²ha (s/he's handling it or has it in her/his hand)",
    "jị²Ɂi²³do³²ha (I'm handling it or have it in my hand)",
    "u¹hi²³do³²lv²³Ɂi (s/he handled it or had it in her/his hand)",
    "a¹hi²³do³²ho³Ɂi (s/he's always handling it or always has it in her/his hand)",
    "hị²hi²³da (handle it! or have it in your hand!)",
    "u²hi²³da³²sdi (for her/him to handle it or for her/him to have it in her/his hand)",
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

  "frequentive/recurring aspect":[
    "gạɁ³ni²sị³ha (s/he's burying him/her)",
    "ji³ni²sị³ha (I'm burying him/her)",
    "u¹ni³sạ²hnv²³Ɂ (s/he buried him/her)",
    "gạɁ³ni²si²³sgọ³Ɂi (s/he's always burying him/her)",
    "hi²ni²³sa (bury him!)",
    "u²ni²³soh³di (for him/her to bury him/her)",
    
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

  // ... (Rest of the code remains the same)

  aspectResult.textContent = `"${currentAspect}"`;
});

// Helper function to activate the "Reveal" button when pressing Enter in the input box
inputAspect.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    revealButton.click();
  }
});

