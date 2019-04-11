import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ActivityProvider {

  private path = "/activity";

  constructor(public http: HttpClient) {
    console.log('Hello ActivityProvider Provider');
  }

  create(content) {
    this.http.post(this.path, content).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    })
  }

  all() {
    return this.http.get(this.path);
  }

}
