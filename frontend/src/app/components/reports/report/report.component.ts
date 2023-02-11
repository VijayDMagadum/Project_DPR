import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LabourService } from '../services/labour.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private labourservice:LabourService,private route:ActivatedRoute) { }
  SiteID:any;
  ngOnInit(): void {
  
    this.SiteID = this.route.snapshot.params['siteId'];
      console.log("reports component : ",this.SiteID)
  }

}
