import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appPipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  private value: number = 1234.56;
  private dateVal: Object = new Date();
  private decimalValue: number = 3.14159265;
  private jsonValue: Object = { moo: 'foo', goo: { too: 'new' }};
  private arrayValue: number[] = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit() {
  }

}
