
var bpm = 60;

var base_freqs = {
  	"ab" : 25.96,
  	"a" : 27.5,
    "a#" : 29.14,
  	"bb" : 29.14,
  	"b" : 30.87,
  	"b#" : 16.35,
  	"cb" : 30.87,
  	"c" : 16.35,
  	"c#" : 17.32,
  	"db" : 17.32,
  	"d" : 18.35,
  	"d#" : 19.45,
  	"eb" : 19.45,
  	"e" : 20.60,
  	"e#" : 21.83,
  	"fb" : 20.60,
  	"f" : 21.83,
  	"f#" : 23.12,
  	"gb" : 23.12,
  	"g" : 24.5,
  	"g#" : 25.96
};

class Note {
  getFreq(note) {
    var note_octave = note.split(".");
    var base_freq = base_freqs[note_octave[0]];
    var octave = parseInt(note_octave[1]);
    return Math.pow(2, octave) * base_freq;
  }
  
	constructor(note) {
  	this.freq = this.getFreq(note);
  }
  
  
}

class PlayableChunk {
  constructor(notes, length, velocity = 0.5, attack = 0.05, decay = 0.05) {
    this.notes = notes;
    this.length = length;
    this.velocity = velocity;
    this.attack = attack;
    this.decay = decay;
  }
  
  play() {
    var startTime = millis();
    var oscs = [];
    for (var i = 0; i < this.notes.length; i++) {
      oscs.push(new p5.Oscillator());
      oscs[i].setType('triangle');
      oscs[i].freq(this.notes[i].freq);
      oscs[i].amp(0);
      oscs[i].start();
      oscs[i].amp(this.velocity, this.attack);
    }
    while (millis() - startTime < this.length/bpm * 60 * 1000) {
    }
    for (var i = 0; i < this.notes.length; i++) {
      oscs[i].amp(0, this.decay);
      oscs[i].stop();
    }
    
  }
}

var trackIndex = 0;

var track = [new PlayableChunk([new Note("e.5")], 0.25),
             new PlayableChunk([new Note("d.5")], 0.25),
             new PlayableChunk([new Note("c.5")], 0.25),
             new PlayableChunk([new Note("d.5")], 0.25),
             new PlayableChunk([new Note("e.5")], 0.25),
             new PlayableChunk([new Note("e.5")], 0.25),
             new PlayableChunk([new Note("e.5")], 0.25),
             new PlayableChunk([new Note("d.5")], 0.25),
             new PlayableChunk([new Note("d.5")], 0.25),
             new PlayableChunk([new Note("d.5")], 0.25),
             new PlayableChunk([new Note("e.5")], 0.25),
             new PlayableChunk([new Note("g.5")], 0.25),
             new PlayableChunk([new Note("g.5")], 0.25),
             new PlayableChunk([new Note("e.5")], 0.25),
             new PlayableChunk([new Note("d.5")], 0.25),
             new PlayableChunk([new Note("c.5")], 0.25),
             new PlayableChunk([new Note("d.5")], 0.25),
             new PlayableChunk([new Note("e.5")], 0.25),
             new PlayableChunk([new Note("e.5")], 0.25),
             new PlayableChunk([new Note("e.5")], 0.25),
             new PlayableChunk([new Note("e.5")], 0.25),
             new PlayableChunk([new Note("d.5")], 0.25),
             new PlayableChunk([new Note("d.5")], 0.25),
             new PlayableChunk([new Note("e.5")], 0.25),
             new PlayableChunk([new Note("d.5")], 0.25),
             new PlayableChunk([new Note("c.5")], 0.25)
            ];

var track2 = [new PlayableChunk([new Note("c.5"), 
                                 new Note("e.5"),
                                 new Note("g.5")], 0.5),
              new PlayableChunk([new Note("c.5"), 
                                 new Note("f.5"),
                                 new Note("a.5")], 0.5),
              new PlayableChunk([new Note("b.4"), 
                                 new Note("d.5"),
                                 new Note("g.5")], 0.5),
              new PlayableChunk([new Note("b.4"), 
                                 new Note("f.5"),
                                 new Note("g.5")], 0.5),
              new PlayableChunk([new Note("c.5"), 
                                 new Note("e.5"),
                                 new Note("g.5")], 0.5)
             ];


function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
}

var playingA
var playingS
var playingD
var playingF

function keyPressed() {
  print("got key press for ", key);
  var osc;
 
  if (key == 'A') {
    track2[trackIndex].play();
  trackIndex += 1;
  trackIndex %= track2.length;
	playingA = true;
  } 
	else if (key == 'S') {
    track2[trackIndex].play();
  trackIndex += 1;
  trackIndex %= track2.length;
			playingS = true;
  } 
	else if (key == 'D') {
    track2[trackIndex].play();
  trackIndex += 1;
  trackIndex %= track2.length;
	playingD = true;
  } 
	else if (key == 'F') {
   track2[trackIndex].play();
  trackIndex += 1;
  trackIndex %= track2.length;
		playingF = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playingA = true;
		playingS = true;
		playingD = true;
		playingF = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
   track2[trackIndex].play();
  trackIndex += 1;
  trackIndex %= track2.length;
		playingF = false;
  } 
	else if (key == 'S') {
    track2[trackIndex].play();
  trackIndex += 1;
  trackIndex %= track2.length;
		playingF = false;
  } 
	else if (key == 'D') {
    track2[trackIndex].play();
  trackIndex += 1;
  trackIndex %= track2.length;
		playingF = false;
  } 
	else if (key == 'F') {
    track2[trackIndex].play();
  trackIndex += 1;
  trackIndex %= track2.length;
		playingF = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}

