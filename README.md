Mystery Hunt Bingo

<table border="1">
    <tr>
        <td id="00"></td>
        <td id="01"></td>
        <td id="02"></td>
        <td id="03"></td>
        <td id="04"></td>
    </tr>
    <tr>
        <td id="10"></td>
        <td id="11"></td>
        <td id="12"></td>
        <td id="13"></td>
        <td id="14"></td>
    </tr>
    <tr>
        <td id="20"></td>
        <td id="21"></td>
        <td id="22"></td>
        <td id="23"></td>
        <td id="24"></td>
    </tr>
    <tr>
        <td id="30"></td>
        <td id="31"></td>
        <td id="32"></td>
        <td id="33"></td>
        <td id="34"></td>
    </tr>
    <tr>
        <td id="40"></td>
        <td id="41"></td>
        <td id="42"></td>
        <td id="43"></td>
        <td id="44"></td>
    </tr>
</table>

<script>
var PHRASE_LIST = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24"];


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
        var id = i.toString() + j.toString();
        if (i === 2 && j === 2) {
            document.getElementById(id).innerHTML = "\"This is not a puzzle.\"";
            document.getElementById(id).style.fontWeight = "bold";
        } else {
            document.getElementById(id).innerHTML = PHRASE_LIST[count++];
        }
    }
}
</script>
