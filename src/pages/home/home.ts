import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { RestProvider } from '../../providers/rest/rest'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  meds: Array<any>;
  medName = '';

  constructor(public navCtrl: NavController, private restProvide: RestProvider) {}

  searchMed(name){
    this.restProvide.getMed(this.medName)
    .subscribe(data => {
      this.meds = data;
      console.log(this.meds);
    });
  }
  onClick(id:string){
    console.log(id);
    this.navCtrl.push("DetailPage",{medid: id} );
  }
}
