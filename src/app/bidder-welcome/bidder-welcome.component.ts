import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidder-welcome',
  templateUrl: './bidder-welcome.component.html',
  styleUrls: ['./bidder-welcome.component.css']
})
export class BidderWelcomeComponent implements OnInit {
bidderId:any=0
  userId!:string|null
  constructor( private http:HttpClient) {

   }
    amount!:number

radioValue!:number

  biddingDetails:any
  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId')
    this.http.get("http://localhost:8083/getAllBiddingDetails").subscribe(res=>this.biddingDetails=res )
    this.http.get(`http://localhost:8083/getFarmer/${this.userId}`).subscribe(res=>{this.bidderId=res
    // thissessionStorage.setItem(this.farmerId.farmerId);
    sessionStorage.setItem('id',JSON.stringify(res) );

  }
    )

  }
  getValue( event:any){

console.log(event.target.value)

this.radioValue=event.target.value

  }

  setBid(){
      console.log(this.amount)




  }



}
