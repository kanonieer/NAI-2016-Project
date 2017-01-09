import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MovieComponent, MovieListComponent,
  MyCartComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
