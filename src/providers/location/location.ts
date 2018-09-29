import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LocationProvider Provider');
  }

  create(location){
    let headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    
    let path = '/location';
    this.http.post(path, location, {headers}).subscribe((data) => {
      console.log(data);
    });
  }
}
