
import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './modules/auth/routes';
import { DefaultRoutes } from './modules/default/routes';

export const GlobalRoutes = () => {
    return (
        <BrowserRouter>
            <AuthRoutes /> {/* Auth Routes of app */}

            <DefaultRoutes /> {/* Default Routes of app */}
        </BrowserRouter>
    );
};