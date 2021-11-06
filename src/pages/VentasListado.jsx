import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getToken = () => {
	return `Bearer ${localStorage.getItem('token')}`;
};

const VentasListado = () => {

	const [ventas, setVentas] = useState([]);

	//let [ventapru, setVentapru] = useState([0]);
	//setVentapru(12345);

	const [ejecutarConsulta, setEjecutarConsulta] = useState([]);

	const form = useRef(null);

	useEffect(() => {
		const obtenerVentas = async () => {
			const options = {
				method: 'GET', url: 'https://frozen-river-09078.herokuapp.com/ventas/',
				headers: {
					Autorization: getToken(),
				}
			};

			await axios
				.request(options)
				.then(function (response) {
					setVentas(response.data);
					console.log(ventas);
					console.log(response.data);
				})
				.catch(function (error) {
					console.error(error);
				});
		};
		if (ejecutarConsulta) {
			obtenerVentas();
			setEjecutarConsulta(false);
		}
	}, [ejecutarConsulta]);

	const eliminarVenta = async (venta) => {
		const options = {
			method: 'DELETE',
			url: `https://frozen-river-09078.herokuapp.com/ventas/${venta._id}`,
			headers: {
				Autorization: getToken(),
			}
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				toast.success('Venta eliminada con exito');
				setEjecutarConsulta(true);
			})
			.catch(function (error) {
				console.error(error);
				toast.error('El venta no se pudo eliminar');
			});
	};

	return (
		<div className='w-11/12'>
			<div className='flex justify-evenly'>
				<div className=' my-4 p-2 w-4/6'>
					<span className='p-2 w-full text-2xl'>Administracion de Ventas</span>
				</div>
				<div className=' w-2/6 flex items-center'>
					<div className='w-full flex justify-end items-center'>
						<button className='normalButton'>
							<Link to='/Ventas'>
							<FontAwesomeIcon icon={faPlus} className='m-1 align-middle mx-2' />
								Crear Venta
							</Link>
						</button>
					</div>
				</div>
			</div>
			<div className='w-full h-full flex flex-col overflow-hidden'>
				<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
						<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-3'>
							<h1>Búsqueda</h1>
							<form>
								<div className='my-6 row flex flex-row justify-evenly items-center'>
									<label htmlFor='fecha' className='labelSearch'>
										Fecha Venta
									</label>
									<input type='date' name='fecha' id='fecha' autoComplete='fecha' className='inputSearch' />

									<label htmlFor='vendedor' className='labelSearch'>
										Vendedor
									</label>
									<input type='text' name='id_ventvendedor' id='id_ventvendedor' autoComplete='id_ventvendedor' className='inputSearch' />
									<label htmlFor='estado' className='labelSearch'>
										Estado
									</label>
									<select id='estado' name='estado' autoComplete='estado' className='inputSearch'>
										<option disabled value={0}>
											Seleccionar
										</option>
										<option>En proceso</option>
										<option>Entregada</option>
										<option>Cancelada</option>
									</select>
									<button type='submit' className='searchButton'>
										Buscar
									</button>
								</div>

								<table className='min-w-full divide-y divide-gray-200'>
									<thead className='bg-gray-50'>
										<tr>
											<th scope='col' className='labelTable'>
												ID Venta
											</th>
											<th scope='col' className='labelTable'>
												Fecha
											</th>
											<th scope='col' className='labelTable'>
												Vendedor
											</th>
											<th scope='col' className='labelTable'>
												Valor Venta
											</th>
											<th scope='col' className='labelTable'>
												Estado
											</th>
											<th scope='col' className='labelTable'>
												Acciones
											</th>
										</tr>
									</thead>
									<tbody className='bg-white divide-y divide-gray-200'>
										{ventas.map((venta) => (
											<tr key={nanoid()}>

												<td className='spaceTable resultTable text-gray-900 font-medium '>{venta._id.substring(0, 10)}</td>
												<td className='spaceTable resultTable'>{venta.fecha}</td>
												<td className='spaceTable resultTable'>{venta.vendedor.nombre} {venta.vendedor.apellido}</td>
												<td className='spaceTable resultTable'>{venta.totalVenta}</td>
												<td className='spaceTable resultTable'>{venta.estado}</td>
												<td className='resultTable spaceTable font-medium'>
													<div className='flex w-full justify-around'>
														
														<Link to={{ pathname: '/VentasActualizar', data: venta }}>
															<i className='fas fa-pencil-alt text-yellow-600 hover:text-yellow-300' />
														</Link>

														<i onClick={() => eliminarVenta(venta)} className='fas fa-trash text-red-600 hover:text-red-300'></i>
													</div>
												</td>
											</tr>
										)
										)}
									</tbody>
								</table>
							</form>

							<ToastContainer position='bottom-center' autoClose={2000} />
						</div>
					</div>
				</div>
				<div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
					<div className='flex-1 flex justify-between sm:hidden'>
						<a href='#' className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
							Anterior
						</a>
						<a href='#' className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
							Siguiente
						</a>
					</div>
					<div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
						<div>
							<p className='text-sm text-gray-700'>
								Mostrando <span className='font-medium'>1</span> - <span className='font-medium'>1</span> de <span className='font-medium'>1</span> resultados
							</p>
						</div>
						<div>
							<nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
								<a href='#' className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
									<span className='sr-only'>Anterior</span>
									<div className='h-5 w-5' aria-hidden='true'>
										&#60;
									</div>
								</a>
								<a href='#'
									aria-current='page'
									className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
									1
								</a>
								<a href='#' className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
									<span className='sr-only'>Siguiente</span>
									<div className='h-5 w-5' aria-hidden='true'>
										&#62;
									</div>
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	
};



export default VentasListado;