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

const Usuarios = () => {
	const [mostrarTabla, setMostrarTabla] = useState(true);
	const [textoBoton, setTextoBoton] = useState('Crear Usuario');
	const [iconoBoton, setIconoBoton] = useState('faPlus');
	const [usuarios, setUsuarios] = useState([]);
	const [ejecutarConsulta, setEjecutarConsulta] = useState([]);

	useEffect(() => {
		const obtenerUsuarios = async () => {
			const options = {
				method: 'GET',
				url: 'https://frozen-river-09078.herokuapp.com/usuarios/',
				headers: {
					Autorization: getToken(),
				}
			};

			await axios
				.request(options)
				.then(function (response) {
					setUsuarios(response.data);
				})
				.catch(function (error) {
					console.error(error);
				});
		};

		if (ejecutarConsulta) {
			obtenerUsuarios();
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
			setTextoBoton('Crear Usuario');
			setIconoBoton(faPlus);
			console.log(iconoBoton);
		} else {
			setTextoBoton('Mostrar Usuarios');
			setIconoBoton(faArrowLeft);
		}
	}, [mostrarTabla]);

	return (
		<div className='w-11/12'>
			<div className='flex justify-evenly'>
				<div className=' my-4 p-2 w-4/6'>
					<span className='p-2 w-full text-2xl'>Administracion de Usuarios</span>
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
				{mostrarTabla ? <TablaUsuarios listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} /> : <FormularioCreacionUsuarios setMostrarTabla={setMostrarTabla} />}
				<ToastContainer position='bottom-center' autoClose={2000} />
			</div>
		</div>
	);
};

const TablaUsuarios = ({ listaUsuarios, setEjecutarConsulta }) => {
	const form = useRef(null);

	const sumitEdit = (e) => { };

	const [busqueda, setBusqueda] = useState('');
	const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);

	useEffect(() => {
		setUsuariosFiltrados(
			listaUsuarios.filter((elemento) => {
				return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
			})
		);
	}, [busqueda, listaUsuarios]);

	return (
		<div className='w-full h-full flex flex-col overflow-hidden'>
			<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
					<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-4'>
						<form>
							<div className='my-3 row flex flex-row items-center'>
								<h1 className='mr-5'>B??squeda</h1>
								<input type='text' id='id_producto' className='inputSearch' value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Ingrese b??squeda" />
							</div>

							<table className='min-w-full divide-y divide-gray-200'>
								<thead className='bg-gray-50'>
									<tr>
										<th scope='col' className='labelTable'>
											Identificaci??n
										</th>
										<th scope='col' className='labelTable'>
											Nombre
										</th>
										<th scope='col' className='labelTable'>
											Apellido
										</th>
										<th scope='col' className='labelTable'>
											Correo
										</th>
										<th scope='col' className='labelTable'>
											Estado
										</th>
										<th scope='col' className='labelTable'>
											Rol
										</th>
										<th scope='col' className='labelTable flex justify-center'>
											Acciones
										</th>
									</tr>
								</thead>
								<tbody className='bg-white divide-y divide-gray-200'>
									{usuariosFiltrados.map((usuario) => (
										<FilaUsuarios key={nanoid()} usuario={usuario} setEjecutarConsulta={setEjecutarConsulta} />
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

const FilaUsuarios = ({ usuario, setEjecutarConsulta }) => {
	const [edit, setEdit] = useState(false);

	const [nuevoUsuario, setnuevoUsuario] = useState({
		identificacion: usuario.identificacion,
		nombre: usuario.nombre,
		apellido: usuario.apellido,
		correo: usuario.correo,
		estado: usuario.estado,
		rol: usuario.rol,
	});

	const actualizarUsuario = async () => {
		console.log(nuevoUsuario);

		const options = {
			method: 'PATCH',
			url: `https://frozen-river-09078.herokuapp.com/usuarios/${usuario._id}`,
			headers: { 'Content-Type': 'application/json', Autorization: getToken(), },
			data: { ...nuevoUsuario },
		};

		await axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				toast.success('Usuario Moficado con exito');
				setEjecutarConsulta(true);
				setEdit(false);
			})
			.catch(function (error) {
				console.error(error);
				toast.error('El usuario no se pudo modificar');
			});
	};

	const eliminarUsuario = async () => {
		const options = {
			method: 'DELETE',
			url: `https://frozen-river-09078.herokuapp.com/${usuario._id}`,
			headers: {
				Autorization: getToken(),
			}
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				toast.success('Usuario Eliminado con exito');
				setEjecutarConsulta(true);
			})
			.catch(function (error) {
				console.error(error);
				toast.error('El usuario no se pudo eliminar');
			});
	};

	return (
		<tr>
			{edit ? (
				<>
					<td className='p-2'>
						<input type='text' value={nuevoUsuario.identificacion} className='listado text-gray-900' onChange={(e) => setnuevoUsuario({ ...nuevoUsuario, identificacion: e.target.value })}></input>
					</td>
					<td className='p-2'>
						<input type='text' value={nuevoUsuario.nombre} className='listado' onChange={(e) => setnuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}></input>
					</td>
					<td className='p-2'>
						<input type='text' value={nuevoUsuario.apellido} className='listado' onChange={(e) => setnuevoUsuario({ ...nuevoUsuario, apellido: e.target.value })}></input>
					</td>
					<td className='p-2'>
						<input type='email' value={nuevoUsuario.correo} className='listado' onChange={(e) => setnuevoUsuario({ ...nuevoUsuario, correo: e.target.value })}></input>
					</td>
					<td className='p-2'>
						<select
							id='estado'
							value={nuevoUsuario.estado}
							name='estado'
							className='listado'
							onChange={(e) => setnuevoUsuario({ ...nuevoUsuario, estado: e.target.value })}
							required //revisar, creo que no es necesario
							defaultValue={0}>
							<option disabled value={0}>
								Seleccione una Opcion
							</option>
							<option>Pendiente</option>
							<option>Activo</option>
							<option>Inactivo</option>
						</select>
					</td>
					<td className='p-2'>
						<select
							id='estado'
							value={nuevoUsuario.rol}
							name='rol'
							className='listado'
							onChange={(e) => setnuevoUsuario({ ...nuevoUsuario, rol: e.target.value })}
							required
							defaultValue={0}>
							<option disabled value={0}>
								Seleccione una Opcion
							</option>
							<option>Administrador</option>
							<option>Vendedor</option>
						</select>
					</td>
				</>
			) : (
				<>
					<td className='spaceTable resultTable text-gray-900 font-medium '>{usuario.identificacion}</td>
					<td className='spaceTable resultTable'>{usuario.nombre}</td>
					<td className='spaceTable resultTable'>{usuario.apellido}</td>
					<td className='spaceTable resultTable'>{usuario.correo}</td>
					<td className='spaceTable resultTable'>{usuario.estado}</td>
					<td className='spaceTable resultTable'>{usuario.rol}</td>
				</>
			)}

			<td className='resultTable spaceTable font-medium'>
				<div className='flex w-full justify-around'>
					{edit ? (
						<i onClick={() => actualizarUsuario()} className='fas fa-check text-green-600 hover:text-green-300' />
					) : (
						<i onClick={() => setEdit(!edit)} className='fas fa-pen text-yellow-400 hover:text-yellow-200' />
					)}

					<i onClick={() => eliminarUsuario()} className='fas fa-times text-red-600 hover:text-red-300'></i>
				</div>
			</td>
		</tr>
	);
};

const FormularioCreacionUsuarios = ({ setMostrarTabla }) => {
	const form = useRef(null);

	const sumitForm = async (e) => {
		e.preventDefault();
		const fd = new FormData(form.current);
		const nuevoUsuario = {};

		fd.forEach((value, key) => {
			nuevoUsuario[key] = value;
		});

		console.log(nuevoUsuario);
		const options = {
			method: 'POST',
			url: 'https://frozen-river-09078.herokuapp.com/usuarios/',
			headers: { 'Content-Type': 'application/json', Autorization: getToken() },
			data: {
				identificacion: nuevoUsuario.identificacion,
				nombre: nuevoUsuario.nombre,
				apellido: nuevoUsuario.apellido,
				correo: nuevoUsuario.correo,
				estado: nuevoUsuario.estado,
				rol: nuevoUsuario.rol,
			},
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
		toast.success('Usuario agregado con exito');
		setMostrarTabla(true);
	};

	return (
		<div className='grid justify-items-center'>
			<div className='my-3'>
				<h2 className='text-lg font-medium text-gray-600'>Nuevo Usuario</h2>
			</div>
			<div className='my-3'>
				<form ref={form} onSubmit={sumitForm}>
					<div className='shadow overflow-hidden sm:rounded-md p-3'>
						<div className='grid grid-cols-1'>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='id'>
									Identificaci??n
								</label>
								<input type='number' name='identificacion' id='identificacion' className='inputTextE ' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Nombre'>
									Nombre
								</label>
								<input type='text' name='nombre' id='nombre' className='inputTextE' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Apellido'>
									Apellido
								</label>
								<input type='text' name='apellido' id='apellido' className='inputTextE' required />
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='Correo'>
									Correo
								</label>
								<input type='email' name='correo' id='correo' className='inputTextE' required />
							</div>

							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='estado'>
									Estado
								</label>
								<select id='estado' name='estado' className='inputTextE text-gray-600' required defaultValue={0}>
									<option disabled value={0}>
										Seleccione una Opcion
									</option>
									<option>Pendiente</option>
									<option>Activo</option>
									<option>Inactivo</option>
								</select>
							</div>
							<div>
								<label className=' tracking-wide mb-2 text-gray-600' htmlFor='estado'>
									Rol
								</label>
								<select id='rol' name='rol' className='inputTextE text-gray-600' required defaultValue={0}>
									<option disabled value={0}>
										Seleccione una Opcion
									</option>
									<option>Administrador</option>
									<option>Vendedor</option>
								</select>
							</div>
							<div className='my-8'>
								<button type='submit' className='w-full bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 focus:outline-none'>
									Guardar
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Usuarios;
