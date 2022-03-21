import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {

  FarmerBidding:any
  constructor( private http:HttpClient) { }

  ngOnInit(): void {

     this.http.get("http://localhost:8083/getFarmerBIdding/50").subscribe(
      res=>this.FarmerBidding=res
    )
  }

}
