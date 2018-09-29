import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContentsProvider {

  private url = "https://pibic-project.herokuapp.com";

  constructor(public http: HttpClient) {
    console.log('Hello ContentsProvider Provider');
  }

  create(content) {
    let headers = new HttpHeaders({
      'Content-type': 'application/json'
    })
    let path = '/content'
    this.http.post(path, content, {headers}).subscribe((data) => {
      console.log(data);
    });
  }

}
