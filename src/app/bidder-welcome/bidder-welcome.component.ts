import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidder-welcome',
  templateUrl: './bidder-welcome.component.html',
  styleUrls: ['./bidder-welcome.component.css']
})
export class BidderWelcomeComponent implements OnInit {
  radioValue!:number
  constructor( private http:HttpClient) {

   }


  amount!:number

  biddingDetails:any
  ngOnInit(): void {

    this.http.get("http://localhost:8083/getAllBiddingDetails").subscribe(res=>this.biddingDetails=res )

  }
  setBid(){
     console.log(this.amount)


  }

  isSelected(){
      console.log(this.radioValue)
  }

}
