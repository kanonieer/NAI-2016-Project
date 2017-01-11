import { Component,Input,Output, EventEmitter } from '@angular/core';
import {Movie} from "../models/movie.model";

@Component({
  selector: 'movie-component',
  templateUrl: 'app/movie/movie.component.html'
})
export class MovieComponent {
  @Input() movie: Movie;
  
  @Output() addMovieToCart : EventEmitter<Movie> =
    new EventEmitter<Movie>();

  addMovie () {
    this.addMovieToCart.emit(this.movie);
  }  
}
