import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from './../services/movie.service';
import {Movie} from "../models/movie.model";

@Component({
  selector: 'movie-list-component',
  templateUrl: 'app/movie-list/movie-list.component.html'
})
export class MovieListComponent {

  public movies: Movie[] = [];



  constructor(private movieService: MovieService){

  }
  ngOnInit (){
    this.movieService.getMovies().subscribe(
      data =>  this.movies = data
    );
  }
  @Output() passMovieToCart : EventEmitter<Movie>
   = new EventEmitter<Movie>();
  
  passMovie( movieToPass: Movie ) {
    this.passMovieToCart.emit(movieToPass);
  }
}
