export interface Movies {
    backdrop_path:     string;
    id:                number;
    title?:             string;
    name?:              string;
    original_title:    string;
    overview:          string;
    poster_path:       string;
    media_type:        string;
    adult:             boolean;
    original_language: string;      
    genere_ids:        number[];
    popularity:        number;
    release_date:      Date;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;        
}
