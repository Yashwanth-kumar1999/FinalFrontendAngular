import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  allData:any;
  constructor( private adminService:AdminDashboardService) { }

  ngOnInit(): void {

    this.adminService.getAllDetails().subscribe(res=>{
      this.allData=res
          })
  }

}
