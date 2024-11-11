import { Component, inject, Injectable, TemplateRef } from '@angular/core';
import { IMovie } from '../../shared/models/movies';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HttpClient } from '@angular/common/http';
import { MoviesAPI } from '../../shared/models/services/MoviesAPI';
import { FormsModule } from '@angular/forms';
import { MovieEditModalComponent } from './movie-edit-modal/movie-edit-modal.component';

const dummyMovie = {
  id: "",
  title: "",
  synopsis: "",
  year: 2010,
  cover: "",
} as const;

const encontrarMovie = (idBuscar: string, movies: IMovie[]) => movies.find(({id}) => id === idBuscar);

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgbNavModule, MovieListComponent, MovieDetailsComponent, FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})

@Injectable({providedIn: 'root'})
export class MoviesComponent {
  private modalService = inject(NgbModal);
  movies: IMovie[] = [];
  moviesAbiertas: IMovie[] = [];
  tabSeleccionada: string = 'lista-movies';
  api: MoviesAPI;

  constructor (private http: HttpClient) {
    this.api = new MoviesAPI(http);
    this.cargarMovies();
  }

  cargarMovies(){
    this.api.getMovies().subscribe(r => this.movies = r);
  }

  cerrarMovie(event: MouseEvent | undefined, idMovieCerrar: string) {
    const indiceActual = this.moviesAbiertas.findIndex(({id}) => id !== idMovieCerrar);
    this.moviesAbiertas = this.moviesAbiertas.filter(({id}) => id !== idMovieCerrar);
    if (!this.moviesAbiertas.length || indiceActual === -1) {
      this.tabSeleccionada = 'lista-movies';
    } else {
      const nuevoIndice = Math.min(this.moviesAbiertas.length - 1, indiceActual);
      this.tabSeleccionada = this.moviesAbiertas[nuevoIndice].id;
    }
    event?.preventDefault();
    event?.stopImmediatePropagation();
  }

  abrirMovie(idMovieClickeada: string) {
    const movieExistente = encontrarMovie(idMovieClickeada, this.moviesAbiertas);
    if (!movieExistente) {
      const movie = encontrarMovie(idMovieClickeada, this.movies);
      this.moviesAbiertas.push(movie!);
    }
    this.tabSeleccionada = idMovieClickeada;
  }

  abrirEditorNuevaMovie(){
    const modalRef = this.modalService.open(MovieEditModalComponent);
    modalRef.componentInstance.movieEditada = {...dummyMovie};
    modalRef.result.then(
      nuevaMovie => this.agregarMovie(nuevaMovie),
      () => {}
    );
  }

  abrirEditorMovie(movieBase: IMovie) {
    const modalRef = this.modalService.open(MovieEditModalComponent);
    modalRef.componentInstance.movieEditada = {...movieBase};
    modalRef.result.then(
      movieEditada => this.actualizarMovie({id: movieBase.id, ...movieEditada}),
      () => {}
    );
  }

  agregarMovie(m: Omit<IMovie, "id">) {
    this.api.createMovie(m).subscribe(nuevaMovie => this.movies.push(nuevaMovie));
  }

  actualizarMovie({id, ...movieActualizada}: Partial<IMovie>){
    console.log('actualizando movie', id!, movieActualizada);
    this.api.updateMovie(id!, movieActualizada).subscribe(resultado => {
      this.movies = this.movies.map(m =>  m.id === id! ? resultado: m);
      this.moviesAbiertas = this.moviesAbiertas.map(m =>  m.id === id! ? resultado: m);
    });
  }

  borrarMovie(idBorrar: string) {
    if (confirm("Desea borrar esta movie?")){
      console.log('borrando', idBorrar);
      this.api.deleteMovie(idBorrar).subscribe(() => {
        this.cerrarMovie(undefined, idBorrar);
        this.movies = this.movies.filter(({id}) => id !== idBorrar);
      });
    }
  }
}
