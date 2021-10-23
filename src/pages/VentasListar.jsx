import React ,{ useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";



const VentasListar = () => {

	const[ventas, setVentas] = useState([]);


	useEffect(() => {
		const options = { method: 'GET', url: 'http://localhost:5000/ventas/' };
		axios.request(options).then(function (response) {
			console.log(response.data);
			setVentas(response.data)
		}).catch(function (error) {
			console.error(error);
		});}, []);



	return (
		<div className='w-full h-full flex flex-col overflow-hidden'>
			<h2 className='text-lg font-medium leading-6 text-gray-900 p-3'>Listado de Ventas</h2>
			<br />
			<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
					<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-3'>
						<h1>Búsqueda</h1>
						<form action='#'>
							<div className='my-6 row flex flex-row justify-evenly items-center'>
								<label htmlFor='id_venta' className='labelSearch'>
									Id. Venta
								</label>
								<input type='text' name='id_venta' id='id_venta' maxLength='5' minLength='5' className='inputSearch' />
								<label htmlFor='fecha_venta' className='labelSearch'>
									Fecha Venta
								</label>
								<input type='date' name='fecha_venta' id='fecha_venta' className='inputSearch' />
								<label htmlFor='nombre_cliente' className='labelSearch'>
									Nombre Cliente
								</label>
								<input
									type='text'
									name='nombre_cliente'
									id='nombre_cliente'
									autoComplete='nombre_cliente'
									className='inputSearch'
								/>
								<label htmlFor='estado' className='labelSearch'>
									Estado
								</label>
								<select id='estado' name='estado' autoComplete='estado' className='inputSearch'>
									<option>En proceso</option>
									<option>Entregada</option>
									<option>Cancelada</option>
								</select>
								<button type='submit' className='searchButton'>
									Buscar
								</button>
							</div>
						</form>
						<table className='min-w-full divide-y divide-gray-200'>
							<thead className='bg-gray-50'>
								<tr>
									<th scope='col' className='labelTable'>
										ID Venta
									</th>
									<th scope='col' className='labelTable'>
										Valor Venta
									</th>
									<th scope='col' className='labelTable'>
										Fecha Venta
									</th>
									<th scope='col' className='labelTable'>
										ID Cliente
									</th>
									<th scope='col' className='labelTable'>
										Nombre Cliente
									</th>
									<th scope='col' className='labelTable'>
										Vendedor
									</th>
									<th scope='col' className='labelTable'>
										Estado
									</th>
									<th scope='col' className='relative px-6 py-3'>
										<span className='sr-only'>Actualizar</span>
									</th>
								</tr>
							</thead>
							<tbody className='bg-white divide-y divide-gray-200'>
								{ventas.map((sale) => (
									<tr key={sale.id_venta}>
										<td className='spaceTable resultTable text-gray-900 font-medium'>{sale.id_venta}</td>
										<td className='spaceTable resultTable'>{sale.valor_venta}</td>
										<td className='spaceTable resultTable'>{sale.fecha_venta}</td>
										<td className='spaceTable resultTable'>{sale.id_cliente}</td>
										<td className='spaceTable resultTable'>{sale.nombre_cliente}</td>
										<td className='spaceTable resultTable'>{sale.vendedor}</td>
										<td className='spaceTable'>
											<span className='px-2 inline-flex leading-5 text-sm rounded-sm bg-green-100 text-green-800'>
												{sale.estado}
											</span>
										</td>
										<td className='resultTable spaceTable font-medium'>
											<Link to='/VentasActualizar'>
												<a href='#' className='actualizarText'>
													Actualizar
												</a>
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
				<div className='flex-1 flex justify-between sm:hidden'>
					<a
						href='#'
						className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
						Anterior
					</a>
					<a
						href='#'
						className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'>
						Siguiente
					</a>
				</div>
				<div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
					<div>
						<p className='text-sm text-gray-700'>
							Mostrando <span className='font-medium'>1</span> - <span className='font-medium'>1</span> de{' '}
							<span className='font-medium'>1</span> resultados
						</p>
					</div>
					<div>
						<nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
							<a
								href='#'
								className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
								<span className='sr-only'>Anterior</span>
								<div className='h-5 w-5' aria-hidden='true'>
									&#60;
								</div>
							</a>
							{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
							<a
								href='#'
								aria-current='page'
								className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'>
								1
							</a>
							<a
								href='#'
								className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
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
	);
};

export default VentasListar;
