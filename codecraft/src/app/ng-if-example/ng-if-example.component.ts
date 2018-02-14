import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngif-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css']
})
export class NgIfExampleComponent implements OnInit {

  people: any[] = [
            {
              "name": "Douglas  Pace",
              "age": 35
            },{
              "name": "Mcleod  Mueller",
              "age": 32
            },{
              "name": "Day  Meyers",
              "age": 21
            },{
              "name": "Aguirre  Ellis",
              "age": 34
            },{
              "name": "Cook  Tyson",
              "age": 32
            }
      ];
  constructor() { }

  ngOnInit() {
  }

}
