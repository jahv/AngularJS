import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-debounce-time',
  templateUrl: './reactive-form-debounce-time.component.html',
  styleUrls: ['./reactive-form-debounce-time.component.css']
})
export class ReactiveFormDebounceTimeComponent implements OnInit {

  searchField: FormControl;
  searches: string[] = [];

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();

    this.searchField.valueChanges.debounceTime(400).subscribe(
      term => { this.searches.push(term); }
    );
  }

}
