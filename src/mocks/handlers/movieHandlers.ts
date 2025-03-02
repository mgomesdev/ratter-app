import { http, HttpResponse } from 'msw';
import { MovieDetailSchema, MovieResponseSchema } from '../../schemas/MovieSchema';

import movieDetailFixture from '../../../cypress/fixtures/movie/movie-detail-fixture.json';
import movieListFixture from '../../../cypress/fixtures/movie/movie-list-fixture.json';

const api_url = process.env.REACT_APP_TMDB_API_URL;

export const movieHandlers = [
    http.get(`${api_url}/movie/:id/similar`, () => HttpResponse.json<MovieResponseSchema>(movieListFixture)),
    http.get(`${api_url}/movie/popular`, () => HttpResponse.json<MovieResponseSchema>(movieListFixture)),
    http.get(`${api_url}/movie/:id`, () => HttpResponse.json<MovieDetailSchema>(movieDetailFixture)),
    http.get(`${api_url}/search/movie?language=pt-BR&page=1&query=test`, () =>
        HttpResponse.json<MovieResponseSchema>(movieListFixture)
    ),
];
