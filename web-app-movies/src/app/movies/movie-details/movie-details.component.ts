import { Component, Input } from '@angular/core';
import { IMovie } from '../../../shared/models/movies';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  @Input() movie!: IMovie;
}
