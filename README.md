Print out this page and take it with you to Mystery Hunt! Refresh the page to get a new Bingo board.

Inspired by [The Last Jedi Bingo](http://www.darthsanddroids.net/bingo/Episode8/) from Darths & Droids.

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
    "Puzzle is cut due to technical difficulties.",
    "Puzzle where teams have to cook something for HQ.",
    "Multiple teams do the final runaround simultaneously.",
    "First puzzle is solved in the first 10 minutes.",
    "First meta is solved in the first hour.",
    "Puzzle which references previous Mystery Hunts.",
    "Puzzle about an anime that started airing in 2016 or later.",
    "Puzzle about a TV show that stopped airing before 1980.",
    "Puzzle involves playing a video game.",
    "Puzzle about a video game that came out in 2016 or later.",
    "Hunt is won before Sunday.",
    "Hunt is won on Monday.",
    "Puzzle whose crucial step is realizing it matches an MIT landmark.",
    "Puzzle which has the phrase HERRING or RED HERRING",
    "Puzzle is unsolved by the end of Hunt.",
    "Team uses a metameta to backsolve a metapuzzle.",
    "Puzzle relying on team room assignments.",
    "Puzzle relying on team names.",
    "Something given at the start of Hunt is a puzzle.",
    "isithuntyet.info is part of the puzzle.",
    "Someone unaffliated with Mystery Hunt gets confused by Mystery Hunt.",
    "No errata is issued during Hunt.",
    "Puzzle is a Duck Konundrum.",
    "Puzzle requires playing out a board game.",
    "A puzzle is part of at least two metapuzzles.",
    "Puzzle where anagramming letters is part of the intended solution.",
    "Puzzle uses element symbols.",
    "Puzzle using math at the graduate-student level or higher.",
    "Puzzle about a webcomic.",
    "Puzzle where teams must create a music video.",
    "Puzzle about Taylor SWift.",
    "Puzzle about Magic: the Gathering.",
    "Puzzle data is embedded in something produced several months ago.",
    "Puzzle uses blockchains in some way.",
    "Puzzle about bridge or poker.",
    "Puzzle uses ternary in extraction.",
    "Team needs to request a replacement for a physical puzzle.",
    "Team backsolves the scavenger hunt puzzle."];


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
            element.innerHTML = "\"This is not a puzzle.\"";
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
