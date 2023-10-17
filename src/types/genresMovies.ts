export interface GenresMoviesResponse {
  genres?: Genres[] | null;
}
export interface Genres {
  id: number;
  name: string;
}
