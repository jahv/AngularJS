import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke'

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input('joke')
  data: Joke;

  @Output()
  jokeDeleted = new EventEmitter<Joke>();

  delete() {
    this.jokeDeleted.emit(this.data);
  }

}
