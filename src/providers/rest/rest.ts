import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {}
  getMed(medName){
    console.log(medName);
    return this.http.get('https://open-medicaments.fr/api/v1/medicaments?query='+ encodeURIComponent(medName));
  }

  getDetailMed(med){
    console.log(med);
    return this.http.get('https://open-medicaments.fr/api/v1/medicaments/'+ encodeURIComponent(med));
  }
  getInterractionMed(interraction){
    console.log(med);
    return this.http.get('https://open-medicaments.fr/api/v1/medicaments/'+ encodeURIComponent(interraction));
  }

}
