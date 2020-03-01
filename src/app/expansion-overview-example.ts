import {Component} from '@angular/core';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  panelOpenState = false;

  Spielstaende = new Array<Spielstand>();

  name : string = "";

  add() {
    let spielstand = new Spielstand();
    spielstand.name = this.name;
    this.Spielstaende.push(spielstand);
    this.name = "";
  }

}

export class Spielstand {

  name: string = "";
  maxrunden = 0;
  runden = 0;

  Runde = new Array<number>(this.maxrunden);

  angesagt = 0;
  gemacht = 0;

  ergebnis = 0;
  ergebnis1 = 0;
  ergebnis2 = 0;
  runde = 0;

  hinzufuegen() {
     if(this.angesagt  == this.gemacht ) {
      this.ergebnis =this.angesagt*10+20;
     }
     else if(this.angesagt > this.gemacht) {
      this.ergebnis =((this.angesagt-this.gemacht)* -10);
     }
    else if(this.angesagt < this.gemacht) {
      this.ergebnis =((this.angesagt-this.gemacht)* -10);
    }
    
    this.runde++;
    this.angesagt= "";
    this.gemacht ="";
  }
  rundenmachen() {
     if(this.angesagt  == this.gemacht ) {
      this.ergebnis =this.angesagt*10+20;
     }
     else if(this.angesagt > this.gemacht) {
      this.ergebnis =((this.angesagt-this.gemacht)* -10);
     }
    else if(this.angesagt < this.gemacht) {
      this.ergebnis =((this.gemacht-this.angesagt)* -10);
    }
    if(this.runden == 0) {
      this.Runde[0] = this.ergebnis;
    } else {
      this.Runde[this.runden] = this.Runde[this.runden-1] + this.ergebnis;
    }
    this.runden = this.runden + 1;
    this.ergebnis = 0;
  }
 

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */