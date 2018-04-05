import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  med: {};
  infoMeds: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restProvide: RestProvider) {
      this.med = navParams.get('medid');
      this.infoMed(this.med);
      this.ionViewDidLoad();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    console.log(this.med);
  }
  goBack() {
    this.navCtrl.pop();
  }
  infoMed(med){
    this.restProvide.getDetailMed(this.med)
    .subscribe(data => {
      this.infoMeds = data;
      console.log(this.infoMeds);
    });
  }
}
