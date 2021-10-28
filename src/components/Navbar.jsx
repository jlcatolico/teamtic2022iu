import React from 'react';
import IconoToys from 'Media/IconoToys.png';
import ToysCompleto from 'Media/ToysCompleto.png';
import user from 'Media/user.svg';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const { user, logout } = useAuth0();

	const cerrarSession = () => {
		logout({ returnTo: window.location.origin });
		localStorage.setItem('token', null);
	};


	return (
		<nav className='bg-gray-200'>
			<div className='mx-auto my-auto px-2 sm:px-6 lg:px-8'>
				<div className='relative flex items-center justify-between h-12'>
					<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
						<button
							type='button'
							className='inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
							aria-controls='mobile-menu'
							aria-expanded='false'>
							<span className='sr-only'>Open main menu</span>
							<svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
								<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16' />
							</svg>
							<svg className='hidden h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
								<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' />
							</svg>
						</button>
					</div>
					<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
						<div className='flex-shrink-0 flex items-center'>
							<img className='block lg:hidden h-8 w-auto' src={IconoToys} alt='TOYS' />
							<img className='hidden lg:block h-8 w-auto' src={ToysCompleto} alt='TOYS' />
						</div>
					</div>

					<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
						<div className='flex items-center'>
							<div >
								<span className=' p-3 text-gray-800'>{user.name}</span>
							</div>
							<img src={user.picture} className='rounded-full w-10' />
						</div>
						<div className='ml-3 relative'>
							<div>
								<button
									onClick={() => cerrarSession()}
									type='button'
									className='bg-green-600 hover:bg-green-500 p-2 rounded-lg text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'
									id='user-menu-button'
									aria-expanded='false'
									aria-haspopup='true'>
									Cerrar Sesion
								</button>
							</div>
							<div
								className='hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
								role='menu'
								aria-orientation='vertical'
								aria-labelledby='user-menu-button'
								tabindex='-1'>
								<a href='#' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' tabindex='-1' id='user-menu-item-0'>
									Your Profile
								</a>
								<a href='#' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' tabindex='-1' id='user-menu-item-1'>
									Settings
								</a>
								<a href='#' className='block px-4 py-2 text-sm text-gray-700' role='menuitem' tabindex='-1' id='user-menu-item-2'>
									Sign out
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='sm:hidden' id='mobile-menu'></div>
		</nav>
	);
};

export default Navbar;
