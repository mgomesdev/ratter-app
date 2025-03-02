import { movieByIdHandlers } from './handlers/movie/movieByIdHandlers';
import { moviePopularHandlers } from './handlers/movie/moviePopularHandlers';

export const handlers = [...moviePopularHandlers, ...movieByIdHandlers];
