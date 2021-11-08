import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

const getToken = () => {
	return `Bearer ${localStorage.getItem('token')}`;
};

const Productos = () => {
	const [mostrarTabla, setMostrarTabla] = useState(true);
	const [textoBoton, setTextoBoton] = useState('Crear Producto');
	const [iconoBoton, setIconoBoton] = useState('faPlus');
	const [productos, setProductos] = useState([]);
	const [ejecutarConsulta, setEjecutarConsulta] = useState([]);

	useEffect(() => {
		const obtenerProductos = async () => {
			const options = {
				method: 'GET',
				url: 'https://frozen-river-09078.herokuapp.com/productos/',
				headers: {
					Autorization: getToken(),
				}
			};

			await axios
				.request(options)
				.then(function (response) {
					setProductos(response.data);
				})
				.catch(function (error) {
					console.error(error);
				});
		};

		if (ejecutarConsulta) {
			obtenerProductos();
			setEjecutarConsulta(false);
		}
	}, [ejecutarConsulta]);

	useEffect(() => {
		if (mostrarTabla) {
			setEjecutarConsulta(true);
		}
	}, [mostrarTabla]);

	useEffect(() => {
		if (mostrarTabla) {
			setTextoBoton('Crear Producto');
			setIconoBoton(faPlus);
			console.log(iconoBoton);
		} else {
			setTextoBoton('Mostrar Productos');
			setIconoBoton(faArrowLeft);
		}
	}, [mostrarTabla]);

	return (
		<div className='w-11/12'>
			<div className='flex justify-evenly'>
				<div className=' my-4 p-2 w-4/6'>
					<span className='p-2 w-full text-2xl'>Administracion de Productos</span>
				</div>
				<div className=' w-2/6 flex items-center'>
					<div className='w-full flex justify-end items-center'>
						<button onClick={() => { setMostrarTabla(!mostrarTabla); }}
							className='searchButton'>
							<FontAwesomeIcon icon={iconoBoton} className='m-1 align-middle mx-2' />
							{textoBoton}
						</button>
					</div>
				</div>
			</div>
			<div>
				{mostrarTabla ? <TablaProductos listaProductos={productos} setEjecutarConsulta={setEjecutarConsulta} /> : <FormularioCreacionProductos setMostrarTabla={setMostrarTabla} />}
				<ToastContainer position='bottom-center' autoClose={2000} />
			</div>
		</div>
	);
};

const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
	const form = useRef(null);

	const sumitEdit = (e) => { };

	const [busqueda, setBusqueda] = useState('');
	const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

	useEffect(() => {
		setProductosFiltrados(
			listaProductos.filter((elemento) => {
				return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
			})
		);
	}, [busqueda, listaProductos]);

	return (
		<div className='w-full h-full flex flex-col overflow-hidden'>
			<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
					<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-4'>
						<form>
							<div className='my-3 row flex flex-row items-center'>
								<h1 className='mr-5'>Búsqueda</h1>
								<input type='text' id='id_producto' className='inputSearch' value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Ingrese búsqueda" />
							</div>

							<table className='min-w-full divide-y divide-gray-200'>
								<thead className='bg-gray-50'>
									<tr>
										<th scope='col' className='labelTable'>
											ID Producto
										</th>
										<th scope='col' className='labelTable'>
											Descripción Producto
										</th>
										<th scope='col' className='labelTable'>
											Precio Unitario
										</th>
										<th scope='col' className='labelTable'>
											Estado
										</th>
										<th scope='col' className='labelTable flex justify-center'>
											Acciones
										</th>
									</tr>
								</thead>
								<tbody className='bg-white divide-y divide-gray-200'>
									{productosFiltrados.map((producto) => (
										<FilaPoducto key={nanoid()} producto={producto} setEjecutarConsulta={setEjecutarConsulta} />
									))}
								</tbody>
							</table>
						</form>
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
							{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
							<a
								href='#'
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
	);
};

const FilaPoducto = ({ producto, setEjecutarConsulta }) => {

	const [edit, setEdit] = useState(false);

	const [nuevoProducto, setnuevoProducto] = useState({
		id_producto: producto.id_producto,
		descripcion: producto.descripcion,
		precio_unitario: producto.precio_unitario,
		estado: producto.estado,
	});

	const actualizarProducto = async () => {
		console.log(nuevoProducto);

		const options = {
			method: 'PATCH',
			url: `https://frozen-river-09078.herokuapp.com/productos/${producto._id}`,
			headers: { 'Content-Type': 'application/json', Autorization: getToken(), },
			data: { ...nuevoProducto },
		};

		await axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				toast.success('Producto Moficado con exito');
				setEjecutarConsulta(true);
				setEdit(false);
			})
			.catch(function (error) {
				console.error(error);
				toast.error('El Producto no se pudo modificar');
			});
	};

	const eliminarProducto = async () => {
		const options = {
			method: 'DELETE',
			url: `https://frozen-river-09078.herokuapp.com/productos/${producto._id}`,
			headers: {
				Autorization: getToken(),
			}
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				toast.success('Producto Eliminado con exito');
				setEjecutarConsulta(true);
			})
			.catch(function (error) {
				console.error(error);
				toast.error('El Producto no se pudo eliminar');
			});
	};

	return (
		<tr>
			{edit ? (
				<>
					<td className='p-2'>
						{' '}
						<input type='number' value={nuevoProducto.id_producto} className='listado text-gray-900' onChange={(e) => setnuevoProducto({ ...nuevoProducto, id_producto: e.target.value })}></input>
					</td>
					<td className='p-2'>
						{' '}
						<input type='text' value={nuevoProducto.descripcion} className='listado' onChange={(e) => setnuevoProducto({ ...nuevoProducto, descripcion: e.target.value })}></input>
					</td>
					<td className='p-2'>
						{' '}
						<input
							type='number'
							value={nuevoProducto.precio_unitario}
							className='listado'
							onChange={(e) => setnuevoProducto({ ...nuevoProducto, precio_unitario: e.target.value })}></input>
					</td>
					<td className='p-2'>
						{' '}
						<select
							id='estado'
							value={nuevoProducto.estado}
							name='estado'
							className='listado'
							required
							defaultValue={0}
							onChange={(e) => setnuevoProducto({ ...nuevoProducto, estado: e.target.value })}>
							<option disabled value={0}>
								Seleccione una Opcion
							</option>
							<option>Disponible</option>
							<option>No Disponible</option>
						</select>
					</td>
				</>
			) : (
				<>
					<td className='spaceTable resultTable text-gray-900 font-medium '>{producto.id_producto}</td>
					<td className='spaceTable resultTable'>{producto.descripcion}</td>
					<td className='spaceTable resultTable'>{producto.precio_unitario}</td>
					<td className='spaceTable resultTable'>{producto.estado}</td>
				</>
			)}

			<td className='resultTable spaceTable font-medium'>
				<div className='flex w-full justify-around'>
					{edit ? (
						<i onClick={() => actualizarProducto()} className='fas fa-check text-green-600 hover:text-green-300' />
					) : (
						<i onClick={() => setEdit(!edit)} className='fas fa-pen text-yellow-400 hover:text-yellow-200' />
					)}

					<i onClick={() => eliminarProducto()} className='fas fa-times text-red-600 hover:text-red-300'></i>
				</div>
			</td>
		</tr>
	);
};

const FormularioCreacionProductos = ({ setMostrarTabla }) => {
	const form = useRef(null);

	const sumitForm = async (e) => {
		e.preventDefault();
		const fd = new FormData(form.current);
		const nuevoProducto = {};

		fd.forEach((value, key) => {
			nuevoProducto[key] = value;
		});

		console.log(nuevoProducto);
		const options = {
			method: 'POST',
			url: 'https://frozen-river-09078.herokuapp.com/productos/',
			headers: { 'Content-Type': 'application/json', Autorization: getToken(), },
			data: { id_producto: nuevoProducto.id_producto, descripcion: nuevoProducto.descripcion, precio_unitario: nuevoProducto.precio_unitario, estado: nuevoProducto.estado },
		};

		console.log('option ejecutados');

		await axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});

		console.log('enviado');
		toast.success('producto agregado con exito');
		setMostrarTabla(true);
	};

	return (
		<div className='grid justify-items-center'>
			<div className='my-3'>
				<h2 className='text-lg font-medium text-gray-600'>Nuevo Producto</h2>
			</div>
			<div className='my-3'>
				<form ref={form} onSubmit={sumitForm}>
					<div className='shadow overflow-hidden sm:rounded-md p-3'>
						<div className='grid grid-cols-1'>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='id'>
									Id. Producto
								</label>
								<input type='number' name='id_producto' id='id_producto' className='inputTextE' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Descripcion'>
									Descripcion Producto
								</label>
								<input type='text' name='descripcion' id='descripcion' className='inputTextE' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='ValorUnitario'>Valor Unitario</label>
								<input type='number' name='precio_unitario' id='precio_unitario' className='inputTextE' required />
							</div>

							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='estado'>
									Estado Producto
								</label>
								<select id='estado' name='estado' className='inputTextE text-gray-600' required defaultValue={0}>
									<option disabled value={0}>
										Seleccione una Opcion
									</option>
									<option>Disponible</option>
									<option>No Disponible</option>
								</select>
							</div>
							<div className='grid justify-items-center'>
								<button type='submit' className='normalButton justify-items-center my-10'>
									<FontAwesomeIcon icon={faCheck} className='m-1 align-middle mx-2' />
									Crear Producto
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Productos;
