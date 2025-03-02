import useRatterStore from '../store';
import MovieService from '../../services/MovieService';
import { MovieDetailSchema, MovieResponseSchema } from '../../schemas/MovieSchema';
import ActorService from '../../services/ActorService';
import { ActorResponseSchema } from '../../schemas/ActorSchema';

export interface LoaderHomeData {
    movieHightlightDetail: Promise<MovieDetailSchema | undefined>;
    moviesLatestReleases: Promise<MovieResponseSchema>;
    moviesHighlightsToo: Promise<MovieResponseSchema>;
    moviesRecommended: Promise<MovieResponseSchema>;
    actors: Promise<ActorResponseSchema>;
}

export const highlightMovieDetailLoader = async () => {
    const { movieHighlightDetail, setMovieHighlightDetail } = useRatterStore.getState();

    try {
        if (movieHighlightDetail) {
            return movieHighlightDetail;
        } else {
            const highlightMovies = await highlightMoviesLoader();
            const data = await MovieService.getById(highlightMovies.results[0].id);
            setMovieHighlightDetail(data);
            return data;
        }
    } catch {}
};

export const highlightMoviesLoader = async () => {
    const { moviesHighlightsToo, setMoviesHighlighsToo } = useRatterStore.getState();

    if (moviesHighlightsToo) {
        return moviesHighlightsToo;
    } else {
        const data = await MovieService.getHighlights();
        setMoviesHighlighsToo(data);
        return data;
    }
};

export const latestReleaseMoviesLoader = async () => {
    const { moviesLatestRelease, setMoviesLatestRelease } = useRatterStore.getState();

    if (moviesLatestRelease) {
        return moviesLatestRelease;
    } else {
        const data = await MovieService.getLatestReleases();
        setMoviesLatestRelease(data);
        return data;
    }
};

export const recommendedMoviesLoader = async () => {
    const { moviesRecommended, setMoviesRecommended } = useRatterStore.getState();

    if (moviesRecommended) {
        return moviesRecommended;
    } else {
        const data = await MovieService.getLatestReleases();
        setMoviesRecommended(data);
        return data;
    }
};

export const getAllActorsLoader = async () => {
    const { actors, setActor } = useRatterStore.getState();

    if (actors) {
        return actors;
    } else {
        const data = await ActorService.getAll();
        setActor(data);

        return data;
    }
};
