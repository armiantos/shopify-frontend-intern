export type OMDbSearchResponse = {
    Search: OMDbMovie[];
    totalResults: string;
    Response: string;
};

export type OMDbMovie = {
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
