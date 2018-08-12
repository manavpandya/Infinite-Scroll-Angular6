import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MydataserviceService {

  constructor(private http: HttpClient) { }

  getMyPhotos(page: number)
  {
    return this.http.get('https://jsonplaceholder.typicode.com/photos?_page='+page);
  }
}
