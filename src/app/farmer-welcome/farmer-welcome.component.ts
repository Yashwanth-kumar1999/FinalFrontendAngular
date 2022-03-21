import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-welcome',
  templateUrl: './farmer-welcome.component.html',
  styleUrls: ['./farmer-welcome.component.css']
})
export class FarmerWelcomeComponent implements OnInit {

  constructor( private http:HttpClient) { }
  customerId!:string|null

  ngOnInit(): void {
    this.customerId=sessionStorage.getItem('customerId')
    console.log(this.customerId)
  }

  farmerId:any| null
getId(){

  this.http.get("http://localhost:8083/getFarmer/`${this.customerId}`").subscribe(res=>this.farmerId=res )

}

}
