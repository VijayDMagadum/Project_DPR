import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-material-consumption',
  templateUrl: './material-consumption.component.html',
  styleUrls: ['./material-consumption.component.css']
})
export class MaterialConsumptionComponent implements OnInit {
  materialsconsuption:any;

  constructor(private fb:FormBuilder) { 

    this.materialsconsuption = this.fb.group({
      activityName: [''],
      consumptionMaterial: [''],
      consuptionQuantity: [''],
      consyptionUnit: [''],
    });

  }
  onSubmit(){
    console.log(this.materialsconsuption.value)
  }
  ngOnInit(): void {
  }

}
