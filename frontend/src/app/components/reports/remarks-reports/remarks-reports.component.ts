import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-remarks-reports',
  templateUrl: './remarks-reports.component.html',
  styleUrls: ['./remarks-reports.component.css']
})
export class RemarksReportsComponent implements OnInit {
  remarks:any;

  constructor(private fb:FormBuilder) { 

    this.remarks = this.fb.group({
      remarks: [''],
      
    });

  }
  onSubmit(){
    console.log(this.remarks.value)
  }
  ngOnInit(): void {
  }

}
