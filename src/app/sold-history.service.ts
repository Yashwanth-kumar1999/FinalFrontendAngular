import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SoldHistoryService {




  constructor(private http:HttpClient) { }

  private url="http://localhost:8083/getAllFarmerSoldHistory/53"

getAllSoldHistory(){


return this.http.get(`${this.url}`);

}


}
