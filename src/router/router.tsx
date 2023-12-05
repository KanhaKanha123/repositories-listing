import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../error-boundry/error-boundry';
import { RepositoriesListPage } from '../pages';

export const router = createBrowserRouter([
    {
        element: <ErrorBoundary><RepositoriesListPage /></ErrorBoundary>,
        path: ''
    }
]);