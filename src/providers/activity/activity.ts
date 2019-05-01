import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ActivityProvider {

  private url = "https://pibic-project.herokuapp.com";
  private path = "/activity";

  constructor(public http: HttpClient) {
    console.log('Hello ActivityProvider Provider');
  }

  create(content) {
    let headers = new HttpHeaders({
      'Content-type': 'application/json'
    })

    this.http.post(this.url + this.path, content, {headers}).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    })
  }

  all() {
    return this.http.get(this.url + this.path);
  }

}
