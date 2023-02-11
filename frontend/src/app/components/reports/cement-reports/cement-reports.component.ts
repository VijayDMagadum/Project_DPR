import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cement-reports',
  templateUrl: './cement-reports.component.html',
  styleUrls: ['./cement-reports.component.css']
})
export class CementReportsComponent implements OnInit {
cement:any;

  constructor(private fb:FormBuilder) { 
    this.cement = this.fb.group({
      openingBalance: [''],
      cementReceived: [''],
      totalStack: [''],
      consuptionToday: [''],
      closingBalance: [''],
    });

  }
  onSubmit(){
    console.log(this.cement.value)
  }

  ngOnInit(): void {
  }

}
