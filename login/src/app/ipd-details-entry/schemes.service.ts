import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchemesService {

  constructor( private http: HttpClient) { }
  getschemelist(){
    return this.http.get("http://localhost:3001/schemes/schemelist");
  }
}
