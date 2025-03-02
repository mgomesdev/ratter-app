import { http, HttpResponse } from 'msw';
import { MovieDetailSchema, MovieResponseSchema } from '../../schemas/MovieSchema';

import movieFixture from '../../../cypress/fixtures/movie/movie-fixture.json';
import movieSimilarFixture from '../../../cypress/fixtures/movie/movie-similar-fixture.json';
import moviePopularFixture from '../../../cypress/fixtures/movie/movie-popular-fixture.json';

const api_url = process.env.REACT_APP_TMDB_API_URL;

export const movieHandlers = [
    http.get(`${api_url}/movie/:id/similar`, () => HttpResponse.json<MovieResponseSchema>(movieSimilarFixture)),
    http.get(`${api_url}/movie/popular`, () => HttpResponse.json<MovieResponseSchema>(moviePopularFixture)),
    http.get(`${api_url}/movie/:id`, () => HttpResponse.json<MovieDetailSchema>(movieFixture)),
];
