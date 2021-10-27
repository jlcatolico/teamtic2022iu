import React from 'react'
import Footer from 'components/Footer';
import PrivateRoute from 'components/PrivateRoute';

const AuthLayout = ({ children }) => {
    return (
        <PrivateRoute>
            <div className='flex flex-col h-screen w-screen justify-between'>
                <main className="flex w-full">{children}</main>
            </div>
        </PrivateRoute>);
};

export default AuthLayout;
