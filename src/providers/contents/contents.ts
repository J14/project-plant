import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContentsProvider {

  private url = "https://pibic-project.herokuapp.com";
  private path = '/content';

  constructor(public http: HttpClient) {
    console.log('Hello ContentsProvider Provider');
  }

  create(content) {
    let headers = new HttpHeaders({
      'Content-type': 'application/json'
    })
    
    this.http.post(this.url + this.path, content, {headers}).subscribe((data) => {
      console.log(data);
    });
  }

  all() {
    return this.http.get(this.url + this.path);
  }

}
