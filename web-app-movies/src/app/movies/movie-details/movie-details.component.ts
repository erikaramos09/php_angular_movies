import { Component, inject, Input, output, TemplateRef } from '@angular/core';
import { IMovie } from '../../../shared/models/movies';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  @Input() movie!: IMovie;
  editarMovie = output<IMovie>();
  borrarMovie = output<string>();

  emitEditarMovie(evt: MouseEvent) {
    evt.preventDefault();
    this.editarMovie.emit(this.movie);
  }

  emitBorrarMovie(event: MouseEvent) {
    event.preventDefault();
    this.borrarMovie.emit(this.movie.id);
  }
}
