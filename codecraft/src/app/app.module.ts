import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JokeComponent } from './joke/joke.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselAppComponent } from './carousel-app/carousel-app.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JokeComponent,
    JokeFormComponent,
    JokeListComponent,
    CarouselComponent,
    CarouselItemComponent,
    CarouselAppComponent,
    NgForExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, CarouselAppComponent, NgForExampleComponent]
})
export class AppModule { }
