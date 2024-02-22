function PhErtek(vizsgaltErtek:number): string {
    var valasz:string = "";
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

function PrimekSzama(vizsgaltTomb:number[]):number {
    let primekSzama:number = 0;
    for (let i:number = 0; i < vizsgaltTomb.length; i++) {
       let osztokSzama:number = 0;
        for (let j:number = 1; j <= vizsgaltTomb[i]; j++) {
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

function MaganHangzokSzama(vizsgaltSzoveg:string):number {
    let maganHangzok:string[] = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"];
    let maganHangzokDb: number = 0;
    vizsgaltSzoveg = vizsgaltSzoveg.toLowerCase();

    for(let i = 0; i < vizsgaltSzoveg.length; i++) {
        if(maganHangzok.includes(vizsgaltSzoveg[i])) {
            maganHangzokDb++;
        }
    }

    return maganHangzokDb;
}