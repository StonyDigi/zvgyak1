function PhErtek(vizsgaltErtek) {
    var valasz = "";
    if (vizsgaltErtek) {
        if (vizsgaltErtek == 7) {
            valasz = "semleges";
        }
        else if (vizsgaltErtek == 5.5) {
            valasz = "savas";
        }
        else if (vizsgaltErtek == 9) {
            valasz = "lugos";
        }
    }
    return valasz;
}
function PrimekSzama(vizsgaltTomb) {
    var primekSzama = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var osztokSzama = 0;
        for (var j = 1; j <= vizsgaltTomb[i]; j++) {
            if (vizsgaltTomb[i] % j == 0) {
                osztokSzama++;
            }
        }
        if (osztokSzama == 2) {
            primekSzama++;
        }
    }
    return primekSzama;
}
function MaganHangzokSzama(vizsgaltSzoveg) {
    var maganHangzok = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"];
    var maganHangzokDb = 0;
    vizsgaltSzoveg = vizsgaltSzoveg.toLowerCase();
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        if (maganHangzok.includes(vizsgaltSzoveg[i])) {
            maganHangzokDb++;
        }
    }
    return maganHangzokDb;
}
