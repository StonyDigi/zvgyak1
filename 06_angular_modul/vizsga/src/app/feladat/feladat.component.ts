import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feladat',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feladat.component.html',
  styleUrl: './feladat.component.css'
})
export class FeladatComponent {
  
  /*

  inputErtek: number = 0;
  eredmeny: string = "";
  logLista:string[] = [];

  inputValtozas() {
    this.inputErtekel();
  }
  EredmenyMentes() {
    this.logLista.push(`Mentve: ${this.inputErtek}`);
    this.inputErtekel();
  }

  private inputErtekel() {
    this.eredmeny = this.primszamE(this.inputErtek) ? 'Prímszám' : 'Nem prímszám';
  }

  private primszamE(szam:number): boolean {
    if (szam <= 1) return false;
    for (let i = 2; i <= Math.sqrt(szam); i++) {
      if (szam % i == 0) return false;
    }
    return true;

  }


*/

private vizsgaltErtek:number = 1;
megoldasok:string[] = [];

public get VizsgaltErtek():number {
return this.vizsgaltErtek;
}

public set VizsgaltErtek(value:number) {
this.vizsgaltErtek = value;
}

primE(vizsgaltErtek:number):boolean {
let osztokSzama:number = 0;
let valasz:boolean = false;

for (let i = 1; i <= vizsgaltErtek; i++) {
  if (vizsgaltErtek % i == 0) {
    osztokSzama++;
  }
}

if (osztokSzama == 2) {
  valasz = true;
}
  return valasz;
}

EredmenyKiir():string { 
  if (this.primE(this.VizsgaltErtek)) {
    return "Prímszám";
} else {
  return "Nem prímszám";
  }
}

eredmenyMentes() {
  if (this.primE(this.VizsgaltErtek)) {
    this.megoldasok.push("Az " + this.VizsgaltErtek.toString() + " " + "Prímszám");
  } else {
    this.megoldasok.push("Az " + this.VizsgaltErtek.toString() + " " + "Nem Prímszám");
    }
  }

reset() {
  this.VizsgaltErtek = 1;
  this.megoldasok = [];
  }  
}