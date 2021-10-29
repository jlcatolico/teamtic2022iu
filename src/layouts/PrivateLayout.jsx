import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import React from 'react'
import PrivateRoute from 'components/PrivateRoute';

const PrivateLayout = ({ children }) => {
  return (
    <PrivateRoute>
      <div className="flex w-screen h-screen">
        <Sidebar />
        <div className='flex flex-col h-screen w-screen justify-between'>
          <Navbar />
          <main className="flex w-full h-full overflow-y-scroll">{children}</main>
          <Footer />
        </div>

      </div>
    </PrivateRoute>
  );
};

export default PrivateLayout;
