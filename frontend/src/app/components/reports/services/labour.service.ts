import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import{LabourReport} from '../models/labour'
import URL from 'src/helper';

@Injectable({
  providedIn: 'root'
})
export class LabourService {
  private url = 'http://localhost:3000/form/addlabour/';
  private userId=localStorage.getItem('userId');
  private SiteId=localStorage.getItem('siteId');

  constructor(private http: HttpClient, private route: ActivatedRoute) { }


    getSiteid(){
      localStorage.removeItem('siteId');
    }
  addLabourReports(labourData: any) {
    console.log("inside Add service",labourData)
  return this.http.post(`${this.url}${this.SiteId}`,labourData)
    }

    getallLabours(): Observable<any>{
      console.log("service iD: ",this.SiteId)
        return this.http.get(`http://localhost:3000/form/getlabour/${this.SiteId}`)
      }


      deletelabour(id:number):Observable<any>{
        console.log(id)
        return this.http.delete(`${URL}/form/deletelabour/${this.SiteId}/${id}`)
      }
      
    updatelabour(id:number,body:LabourReport){
      return this.http.put(`${URL}/form/ulabopur/${id}`,body)
    }
}
