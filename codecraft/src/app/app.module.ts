import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import "rxjs/Rx";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JokeComponent } from './joke/joke.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselAppComponent } from './carousel-app/carousel-app.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { RecentArticlesComponent } from './recent-articles/recent-articles.component';
import { CardHoverDirective } from './card-hover.directive';
import { TryDirectivesComponent } from './try-directives/try-directives.component';
import { CcRolloverDirective } from './cc-rollover.directive';
import { PipesComponent } from './pipes/pipes.component';
import { DefaultPipe } from './default.pipe';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { CleanPipePipe } from './clean-pipe.pipe';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormDebounceTimeComponent } from './reactive-form-debounce-time/reactive-form-debounce-time.component';
import { ReactiveFormDistinctUntilChangedComponent } from './reactive-form-distinct-until-changed/reactive-form-distinct-until-changed.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


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
    NgForExampleComponent,
    NgIfExampleComponent,
    NgSwitchExampleComponent,
    NgStyleExampleComponent,
    NgClassExampleComponent,
    RecentArticlesComponent,
    CardHoverDirective,
    TryDirectivesComponent,
    CcRolloverDirective,
    PipesComponent,
    DefaultPipe,
    CustomPipesComponent,
    CleanPipePipe,
    FormComponent,
    ReactiveFormComponent,
    ReactiveFormDebounceTimeComponent,
    ReactiveFormDistinctUntilChangedComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, CarouselAppComponent,
    NgForExampleComponent, NgIfExampleComponent, NgSwitchExampleComponent,
    NgStyleExampleComponent, NgClassExampleComponent, RecentArticlesComponent,
    TryDirectivesComponent, PipesComponent, CustomPipesComponent, FormComponent,
    ReactiveFormComponent, ReactiveFormDebounceTimeComponent,
    ReactiveFormDistinctUntilChangedComponent, TemplateDrivenFormComponent]
})
export class AppModule { }
