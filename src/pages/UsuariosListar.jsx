import React from 'react';

const people = [
	{
		name: 'Jane Cooper',
		role: 'Admin',
		email: 'jane.cooper@example.com',
	},
	{
		name: 'Jane Cooper',
		role: 'Admin',
		email: 'jane.cooper@example.com',
	},
	{
		name: 'Jane Cooper',
		role: 'Admin',
		email: 'jane.cooper@example.com',
	},
	{
		name: 'Jane Cooper',
		role: 'Admin',
		email: 'jane.cooper@example.com',
	},
];

const UsuariosListar = () => {
	return (
		<div className='w-full h-full flex flex-col overflow-hidden'>
			<h2 className='text-lg font-medium leading-6 text-gray-900 p-3'>Listado de Usuarios</h2>
			<br />
			<div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
					<div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-3'>
						<h1>Búsqueda</h1>
						<form action='#'>
							<div className='my-6 row flex flex-row justify-evenly items-center'>
								<label htmlFor='correo' className='labelSearch'>
									Correo
								</label>
								<input type='email' name='correo' id='correo' autoComplete='correo' className='inputSearch' />
								<label htmlFor='rol' className='labelSearch'>
									Rol
								</label>
								<select id='rol' name='rol' autoComplete='rol' className='inputSearch'>
									<option>Administrador</option>
									<option>Vendedor</option>
								</select>
								<label htmlFor='estado' className='labelSearch'>
									Estado
								</label>
								<select id='estado' name='estado' autoComplete='estado' className='inputSearch'>
									<option>Pendiente</option>
									<option>Activo</option>
									<option>Inactivo</option>
								</select>
								<button type='submit' className='searchButton'>
									Buscar
								</button>
							</div>
						</form>
						<div className='bg-green-400 w-full rounded-md my-3'>
							<p className='p-2 text-center text-white'>El registro se actualizó correctamente</p>
						</div>
						<table className='min-w-full divide-y divide-gray-200'>
							<thead className='bg-gray-50'>
								<tr>
									<th scope='col' className='labelTable'>
										Nombre
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
									<th scope='col' className='relative px-6 py-3'>
										<span className='sr-only'>Actualizar</span>
									</th>
								</tr>
							</thead>
							<tbody className='bg-white divide-y divide-gray-200'>
								{people.map((person) => (
									<tr key={person.email}>
										<td className='spaceTable resultTable font-medium text-gray-900'>{person.name}</td>
										<td className='spaceTable resultTable'>{person.email}</td>
										<td className='spaceTable'>
											<select
												id='rol'
												name='rol'
												autoComplete='rol'
												className='w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
												<option>Administrador</option>
												<option>Vendedor</option>
											</select>
										</td>
										<td className='spaceTable'>
											<select
												id='estado'
												name='estado'
												autoComplete='estado'
												className='mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
												<option>Pendiente</option>
												<option>Activo</option>
												<option>Inactivo</option>
											</select>
										</td>
										<td className='spaceTable text-right text-sm font-medium'>
											<a href='#' className='actualizarText'>
												Actualizar
											</a>
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

export default UsuariosListar;
