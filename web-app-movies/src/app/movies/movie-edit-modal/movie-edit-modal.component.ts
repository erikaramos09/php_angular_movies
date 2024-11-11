import { Component, inject, Input, output } from '@angular/core';
import { IMovie } from '../../../shared/models/movies';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-edit-modal',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './movie-edit-modal.component.html',
  styleUrl: './movie-edit-modal.component.css'
})
export class MovieEditModalComponent {
  movieEditada?: IMovie;
  modal = inject(NgbActiveModal);

  editarMovie = output<IMovie>();
  borrarMovie = output<string>();

  emitEditarMovie(evt: MouseEvent) {
    this.editarMovie.emit(this.movieEditada!);
    evt.preventDefault();
  }

  emitBorrarMovie(event: MouseEvent) {
    this.borrarMovie.emit(this.movieEditada!.id);
    event.preventDefault();
  }
}
