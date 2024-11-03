import { Component } from '@angular/core';
import { IMovie } from '../../shared/models/movies';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const lasMoviesDemo: IMovie[] = [
  {
    id: "1",
    title: "kabosu",
    synopsis: "se trata de algo",
    year: 2024,
    cover: "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
  },
  {
    id: "2",
    title: "balltze",
    synopsis: "se trata de otra cosa",
    year: 2025,
    cover: "https://upload.wikimedia.org/wikipedia/en/1/14/Balltze_%28Cheems%29.jpg",
  },
  {
    id: "3",
    title: "cheems mamado",
    synopsis: "se trata de chocomilk",
    year: 2014,
    cover: "https://i.pinimg.com/736x/a2/c5/13/a2c5137a46fc4d9195ddd6b334bede44.jpg",
  },
];

const encontrarMovie = (idBuscar: string, movies: IMovie[]) => movies.find(({id}) => id === idBuscar);

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgbNavModule, MovieListComponent, MovieDetailsComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies = lasMoviesDemo;
  moviesAbiertas: IMovie[] = [];
  tabSeleccionada: string = 'lista-movies'

  cerrarMovie(event: MouseEvent, idMovieCerrar: string) {
    const indiceActual = this.moviesAbiertas.findIndex(({id}) => id !== idMovieCerrar);
    this.moviesAbiertas = this.moviesAbiertas.filter(({id}) => id !== idMovieCerrar);
    if (!this.moviesAbiertas.length) {
      this.tabSeleccionada = 'lista-movies';
    } else {
      const nuevoIndice = Math.min(this.moviesAbiertas.length - 1, indiceActual);
      this.tabSeleccionada = this.moviesAbiertas[nuevoIndice].id;
    }
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  abrirMovie(idMovieClickeada: string) {
    const movieExistente = encontrarMovie(idMovieClickeada, this.moviesAbiertas);
    if (!movieExistente) {
      const movie = encontrarMovie(idMovieClickeada, this.movies);
      this.moviesAbiertas.push(movie!);
    }
    this.tabSeleccionada = idMovieClickeada;
  }
}
