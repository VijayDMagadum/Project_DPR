import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Site } from '../models/Site';
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http:HttpClient) { }
  AddItems(sites:Site): Observable<any> {
    console.log('Request is sent!');
    console.log(sites)
    return this.http.post(`${URL}/form/addsite`,
    sites)
  }

  getallSites(){
    return this.http.get(`${URL}/form/getalldata`)
  }
  deleteSite(id:any){
    return this.http.delete(`${URL}/form/deletesite/${id}`)
  }
}
