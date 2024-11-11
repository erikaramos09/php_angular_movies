import { Component, Input, output } from '@angular/core';
import { IMovie } from '../../../shared/models/movies';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  @Input() movieList!: IMovie[];
  seleccionarMovieId = output<string>();
  editarMovie = output<IMovie>();
  borrarMovie = output<string>();

  emitirMovieId(event: MouseEvent, movieId: string) {
    event.preventDefault();
    this.seleccionarMovieId.emit(movieId);
  }

  emitirEditarMovie = (movie: IMovie) => {
    console.log('emitirEditarMovie', movie);
    this.editarMovie.emit(movie);
  }

  emitirBorrarMovie = (movieId: string) => this.borrarMovie.emit(movieId);
}
