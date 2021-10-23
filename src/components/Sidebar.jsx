import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Logo from 'Media/IconoToys.png';
import useActiveRoute from 'hooks/useActiveRoute';

const Sidebar = () => {
	return (
		<nav className='hidden lg:flex md:w-50 bg-gradient-to-b from-white via-gray-200 to-gray-400 p-2 flex flex-col'>
			<div className='px-4'>
				<img alt='...' src={Logo} className='max-w-100-px my-2' />
			</div>
			<ul className='flex flex-col'>
				<BotonSideBar nombre='Home' ruta='/Inside' icono='fas fa-home' />
				<BotonSideBar nombre='Productos' ruta='/Productos' icono='fas fa-gifts' />
				<BotonSideBar nombre='Ventas' ruta='/Ventas' icono='far fa-list-alt' />
				<BotonSideBar nombre='Usuarios' ruta='/Usuarios' icono='fas fa-users' />
			</ul>
		</nav>
	);
};

const BotonSideBar = ({nombre, ruta, icono}) => {
	const isActive = useActiveRoute(ruta);
	return (
		<Link to={ruta}>
			<li className={`text-yellow-600 px-3 py-5 rounded-full text-md font-bold hover:bg-yellow-600 hover:text-white hover:font-extrabold hover:border-white hover:border-4`}>
				<i className={`${icono} w-6`} />
				{nombre}
			</li>
		</Link>
	);
};

export default Sidebar;
