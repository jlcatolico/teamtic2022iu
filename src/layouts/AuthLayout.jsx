import React from 'react'
import Footer from 'components/Footer';

const AuthLayout = ({ children }) => {
    return (
        <div className='flex flex-col h-screen w-screen justify-between'>
            <main className="flex w-full">{children}</main>
        </div>
    );
};

export default AuthLayout;
