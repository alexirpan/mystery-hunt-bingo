for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
        var id = i.toString() + j.toString();
        document.getElementById(id).innerHTML = id;
    }
}
