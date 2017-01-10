import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [ AppComponent, MovieComponent, MovieListComponent,
    OrderComponent, AboutComponent, HomeComponent ],
  imports:      [ BrowserModule, HttpModule,
  RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
  ])
 ],
  bootstrap: [ AppComponent ],
  providers: [ MovieService ]
})
export class AppModule { }
