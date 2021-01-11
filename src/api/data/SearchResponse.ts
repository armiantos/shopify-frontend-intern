export type SearchResponse = {
    Search: Movie[];
    totalResults: string;
    Response: string;
};

export type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: Type;
    Poster: string;
};

export enum Type {
    Movie = 'movie',
    Series = 'series',
}
