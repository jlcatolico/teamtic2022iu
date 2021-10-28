import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Logo from 'Media/IconoToys.png';
import useActiveRoute from 'hooks/useActiveRoute';

const Sidebar = () => {
	return (
		<nav className='hidden lg:flex md:w-50 bg-gray-800 border-gray-300 p-2 flex flex-col'>
			<div className='px-4'>
				<img alt='...' src={Logo} className='max-w-100-px my-2' />
			</div>
			<ul className='flex flex-col'>
				<BotonSideBar nombre='Home' ruta='/Inside' icono='fas fa-home' />
				<BotonSideBar nombre='Productos' ruta='/Productos' icono='fas fa-gifts' />
				<BotonSideBar nombre='Ventas' ruta='/VentasListado' icono='far fa-list-alt' />
				<BotonSideBar nombre='Usuarios' ruta='/Usuarios' icono='fas fa-users' />
			</ul>
		</nav>
	);
};

const BotonSideBar = ({nombre, ruta, icono}) => {
	const isActive = useActiveRoute(ruta);
	return (
		<Link to={ruta}>
			<li className={` ${          isActive ? 'text-black bg-gray-200' : 'text-white bg-gray-600'} px-3 py-3 rounded-lg text-md font-bold  hover:bg-gray-400 hover:text-black hover:font-extrabold hover:border-white hover:border-4 my-1`}>
				<i className={`${icono} w-6`} />
				{nombre}
			</li>
		</Link>
	);
};

export default Sidebar;
