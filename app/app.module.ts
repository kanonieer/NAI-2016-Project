import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ AppComponent, MovieComponent, MovieListComponent,
    MyCartComponent, AboutComponent, HomeComponent ],
  imports:      [ BrowserModule,
  RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
  ])
 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
