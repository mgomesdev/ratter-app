import { createRoutesFromElements, createBrowserRouter, Route, defer } from 'react-router-dom';

import GlobalError from './app/global-error';
import RootLayout from './app/layout';
import Movie from './app/Movie';
import Home from './app/Home';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<GlobalError />} element={<RootLayout />} path="/">
            <Route element={<Home />} index />
            <Route element={<Movie />} path="movie/:id" />
        </Route>
    )
);

export default router;
