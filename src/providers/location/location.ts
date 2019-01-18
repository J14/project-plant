import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {

  private path = '/location';

  constructor(public http: HttpClient) {
    console.log('Hello LocationProvider Provider');
  }

  create(location){
    let headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    
    
    this.http.post(this.path, location, {headers}).subscribe((data) => {
      console.log(data);
    });
  }

  all() {
    return this.http.get(this.path);
  }
}
