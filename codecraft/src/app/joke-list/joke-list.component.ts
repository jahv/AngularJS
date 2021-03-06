import { Component } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?","Hello-Me (Halloumi) hell yeah!")
      // new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      // new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")
    ];
  }

  addJoke(joke: Joke) {
    this.jokes.unshift(joke);
  }

  deleteJoke(joke: Joke) {
    this.jokes = this.jokes.filter(function(item){
      return item.setup !== joke.setup;
    });
  }
}
