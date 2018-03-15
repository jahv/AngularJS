import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { SearchService } from './search.service';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '',       redirectTo: 'home', pathMatch: 'full'},
  { path: 'find',   redirectTo: 'search'},
  { path: 'home',   component:  HomeComponent },
  { path: 'search', component:  SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
