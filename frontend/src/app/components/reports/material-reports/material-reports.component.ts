import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import{MaterialConsuption} from '../models/materialReport'
@Component({
  selector: 'app-material-reports',
  templateUrl: './material-reports.component.html',
  styleUrls: ['./material-reports.component.css']
})
export class MaterialReportsComponent implements OnInit {
  materials:any;

  constructor(private fb:FormBuilder) { 

    this.materials = this.fb.group({
      materialReceived: [''],
      supplierName: [''],
      quality: [''],
      billNo: [''],
      amount: [''],
      paid  : [''],
      time: [''],
    });

  }
  onSubmit(){
    console.log(this.materials.value)
  }

  ngOnInit(): void {
  }

}
