import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {

    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchAuth0Token = async () => {
            const accessToken = await getAccessTokenSilently({
                audience:`api-autenticacion-gestorventas-teamtic`,
            });
            console.log(accessToken);
        };

       // fetchAuth0Token();
    }, [])

    if (isLoading) return <div>Loading...</div>;
    return isAuthenticated ? <> {children}</> : <div>No estas Autenticado para ver el sitio</div>
};

export default PrivateRoute
