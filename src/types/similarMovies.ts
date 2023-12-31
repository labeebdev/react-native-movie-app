export interface SimilarMoviesResponse {
  page: number;
  results?: SimilarMoviesResult[] | null;
  total_pages: number;
  total_results: number;
}
export interface SimilarMoviesResult {
  adult: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
