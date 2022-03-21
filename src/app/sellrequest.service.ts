import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterStatus } from './register-status';
import { SellRequestStatus } from './sell-request-status';
import { Sellrequest } from './sellrequest';

@Injectable({
  providedIn: 'root'
})
export class SellrequestService {

  // id!:number;
  // id=sellrequest.id
  private url="http://localhost:8083/sellRequest/50.api"

  constructor( private http:HttpClient) { }

  register(sellrequest:Sellrequest):Observable<SellRequestStatus>{

    console.log(JSON.stringify(sellrequest))

    return this.http.post<SellRequestStatus>(`${this.url}`,sellrequest)


  }
}
