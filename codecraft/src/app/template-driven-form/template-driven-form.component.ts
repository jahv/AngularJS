import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  private emailX: string = "jahv.89@gmail.com";

  langs:string[] = [
        'English',
        'French',
        'German'];

  constructor() { }

  ngOnInit() {
  }

}
