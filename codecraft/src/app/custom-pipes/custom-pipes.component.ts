import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  private imageUrl: string = '';

  constructor() { }

  ngOnInit() {
  }

}
