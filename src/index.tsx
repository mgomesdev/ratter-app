import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './index.css';

import { defaultTheme } from './config/theme';

import router from './routes';

async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') return;

    const { worker } = await import('./mocks/browser');

    return worker.start({ onUnhandledRequest: 'bypass' });
}

enableMocking().then(() => {
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

    root.render(
        <React.StrictMode>
            <ThemeProvider theme={defaultTheme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </React.StrictMode>
    );
});
