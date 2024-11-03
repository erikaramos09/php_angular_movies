import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MoviesComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-app-movies';
}
