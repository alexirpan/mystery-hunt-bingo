Mystery Hunt Bingo

<table border="1">
    <tr>
        <td width="150" height="150" id="00"></td>
        <td width="150" height="150" id="01"></td>
        <td width="150" height="150" id="02"></td>
        <td width="150" height="150" id="03"></td>
        <td width="150" height="150" id="04"></td>
    </tr>
    <tr>
        <td width="150" height="150" id="10"></td>
        <td width="150" height="150" id="11"></td>
        <td width="150" height="150" id="12"></td>
        <td width="150" height="150" id="13"></td>
        <td width="150" height="150" id="14"></td>
    </tr>
    <tr>
        <td width="150" height="150" id="20"></td>
        <td width="150" height="150" id="21"></td>
        <td width="150" height="150" id="22"></td>
        <td width="150" height="150" id="23"></td>
        <td width="150" height="150" id="24"></td>
    </tr>
    <tr>
        <td width="150" height="150" id="30"></td>
        <td width="150" height="150" id="31"></td>
        <td width="150" height="150" id="32"></td>
        <td width="150" height="150" id="33"></td>
        <td width="150" height="150" id="34"></td>
    </tr>
    <tr>
        <td width="150" height="150" id="40"></td>
        <td width="150" height="150" id="41"></td>
        <td width="150" height="150" id="42"></td>
        <td width="150" height="150" id="43"></td>
        <td width="150" height="150" id="44"></td>
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
    }
}
</script>
