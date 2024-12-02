import { HttpClient } from "@angular/common/http";
import { IMovie } from "../movies";

export class MoviesAPI {
  private baseURL: string = 'https://phpangularmovies-production.up.railway.app/api/movie';
  constructor(private http: HttpClient) { }

  public getMovies = () => this.http.get<IMovie[]>(this.baseURL);

  public getMovieById = (id: string) => this.http.get<IMovie>(`${this.baseURL}/${id}`);

  public updateMovie = (id: string, movie: Partial<IMovie>) => {
    return this.http.put<IMovie>(`${this.baseURL}/${id}`, movie);
  }

  public createMovie = (movie: Omit<IMovie, 'id'>) => {
    return this.http.post<IMovie>(this.baseURL, movie);
  }

  public deleteMovie = (id: string) => this.http.delete<IMovie>(`${this.baseURL}/${id}`);
}
