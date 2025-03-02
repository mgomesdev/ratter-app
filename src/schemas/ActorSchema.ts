export type KnownFor = {
    backdrop_path: string | null;
    id: number;
    title?: string;
    original_title?: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: Array<number>;
    popularity: number;
    release_date?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
    name?: string;
    original_name?: string;
    first_air_date?: string;
    origin_country?: string[];
};

export interface ActorCrewSchema {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
}

export interface ActorSchema {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    known_for?: KnownFor[];
    cast_id?: number;
    character?: number | string;
    credit_id?: string;
    order?: number;
}

export interface ActorResponseSchema {
    page: number;
    results: ActorSchema[];
    total_pages: number;
    total_results: number;
}
