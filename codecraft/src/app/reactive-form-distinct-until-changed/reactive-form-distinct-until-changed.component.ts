import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-distinct-until-changed',
  templateUrl: './reactive-form-distinct-until-changed.component.html',
  styleUrls: ['./reactive-form-distinct-until-changed.component.css']
})
export class ReactiveFormDistinctUntilChangedComponent implements OnInit {

  searchField: FormControl;
  searches: string[] = [];

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();

    this.searchField.valueChanges
    .debounceTime(400)
    .distinctUntilChanged()
    .subscribe(
      term => { this.searches.push(term); }
    );
  }

}
