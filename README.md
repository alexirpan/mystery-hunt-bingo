Generate a bingo board prior to MIT Mystery Hunt! Refresh the page to get a new board.

Inspired by the [several](https://www.darthsanddroids.net/bingo/Episode7/) [Star Wars](https://www.darthsanddroids.net/bingo/Episode8/) [bingos](http://www.darthsanddroids.net/bingo/Episode9/) made by Darths & Droids for the sequel trilogy.

This is not a puzzle, and I'm not part of the organizing team.

<table border="1" cellpadding="0" cellspacing="0">
    <tr>
        <td width="125" height="125" id="00"></td>
        <td width="125" height="125" id="01"></td>
        <td width="125" height="125" id="02"></td>
        <td width="125" height="125" id="03"></td>
        <td width="125" height="125" id="04"></td>
    </tr>
    <tr>
        <td width="125" height="125" id="10"></td>
        <td width="125" height="125" id="11"></td>
        <td width="125" height="125" id="12"></td>
        <td width="125" height="125" id="13"></td>
        <td width="125" height="125" id="14"></td>
    </tr>
    <tr>
        <td width="125" height="125" id="20"></td>
        <td width="125" height="125" id="21"></td>
        <td width="125" height="125" id="22">Waiting for Javascript to populate entries. Please wait...</td>
        <td width="125" height="125" id="23"></td>
        <td width="125" height="125" id="24"></td>
    </tr>
    <tr>
        <td width="125" height="125" id="30"></td>
        <td width="125" height="125" id="31"></td>
        <td width="125" height="125" id="32"></td>
        <td width="125" height="125" id="33"></td>
        <td width="125" height="125" id="34"></td>
    </tr>
    <tr>
        <td width="125" height="125" id="40"></td>
        <td width="125" height="125" id="41"></td>
        <td width="125" height="125" id="42"></td>
        <td width="125" height="125" id="43"></td>
        <td width="125" height="125" id="44"></td>
    </tr>
</table>

<script>
var PHRASE_LIST = [
    "Puzzle release delayed due to technical difficulties.",
    // "Puzzle requires cooking something for HQ.",
    "Multiple teams do the final runaround simultaneously.",
    "First puzzle is solved in the first 10 minutes.",
    "First meta is solved in the first hour.",
    "Puzzle references previous Mystery Hunts.",
    "Puzzle uses an anime that started airing in the past 2 years.",
    "Puzzle uses a TV show that stopped airing before 1990.",
    "Puzzle involves playing a video game.",
    "Puzzle uses a video game released in the past 2 years.",
    "Hunt is won before Sunday (Eastern time zone).",
    "Hunt is won on Monday (Eastern time zone).",
    "Puzzle whose crucial step is realizing it matches an MIT landmark.",
    "Puzzle which has the phrase HERRING or RED HERRING",
    "Something given at the start of Hunt is a puzzle.",
    "No errata is issued during Hunt.",
    "Puzzle is a Duck Konundrum.",
    "Puzzle requires playing out a board game.",
    "A puzzle is part of at least two metapuzzles.",
    "Puzzle where anagramming is part of the intended solution.",
    "Puzzle uses element symbols.",
    "Puzzle uses grad-level math or higher.",
    "Puzzle about a webcomic.",
    "Puzzle where teams must create a music video.",
    "Puzzle about Taylor Swift.",
    "Puzzle about Magic: the Gathering.",
    "Puzzle data is embedded in something produced months ago.",
    "Puzzle uses blockchains or cryptocurrency in some way.",
    "Puzzle about bridge or poker.",
    "Puzzle uses ternary in extraction.",
    // "Need to ask for a replacement for a physical puzzle.",
    // "The scavenger hunt puzzle is backsolved.",
    "Metapuzzle solved with <= half the answers.",
    "A puzzle has multiple answers.",
    "The winning team has < 50 members.",
    "The winning team has 50+ members.",
    "More than 20 incorrect guesses on a single puzzle.",
    "Puzzle requires identifying over 25 audio clips.",
    "\"That can't be the right idea!\" It's the right idea.",
    "Puzzle is stuck for 4+ hours, then gets backsolved.",
    "Puzzle is stuck for 30+ minutes, then someone checks the work and solves it.",
    "Puzzle is stuck because final step is to solve a cryptic and no one can.",
    "Puzzle has a clue that references COVID-19 or the coronavirus.",
    "10+ airplane emojis appear during kickoff.",
    "Puzzle about Harry Potter.",
    "Puzzle about Lord of the Rings.",
    "Puzzle that uses solfege.",
    "Puzzle that uses blood types.",
    "A cryptics puzzle where the wordplay half must be modified first.",
    "Puzzle referencing a Pixar movie.",
    "Puzzle about building your own logic puzzle.",
    "Answer to the puzzle appears in the title.",
    "There's a copy-to-clipboard button.",
    "Puzzle references the US 2020 election.",
    "Rock Lobster by The B-52's gets referenced.",
    "Video chat program for interactive events crashes.",
    "Puzzle that requires physically running around.",
    "Puzzle that requires GPS spoofing.",
    "Puzzle that references Pokemon."
];

function shuffle(array) {
    var currentIndex = array.length
      , temporaryValue
      , randomIndex
      ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
}

// Shuffle then take first 24 entries.
PHRASE_LIST = shuffle(PHRASE_LIST);

var count = 0;
for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
        // Assign entries
        var id = i.toString() + j.toString();
        var element = document.getElementById(id);
        if (i === 2 && j === 2) {
            element.innerHTML = "FREE SQUARE: \"This is not a puzzle.\"";
            element.style.fontWeight = "bold";
        } else {
            element.innerHTML = PHRASE_LIST[count++];
        }
        // Misc styling
        element.style.textAlign = "center";
        element.style.verticalAlign = "middle";
    }
}
</script>
