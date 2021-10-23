import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link} from 'react-router-dom';

const producto = [
	{
		id_producto: '00034',
		descripcion: 'Televisor lg 42 Pulgadas',
		cantidad: '2',
		precioUnitario: '2.300.000',
		precioTotal: '4.500.000',
	},
	{
		id_producto: '00012',
		descripcion: 'mini componente sony 300w',
		cantidad: '3',
		precioUnitario: '500.000',
		precioTotal: '1.800.000',
	},
	{
		id_producto: '00054',
		descripcion: 'Lavadora lg 30 libras',
		cantidad: '1',
		precioUnitario: '3.200.000',
		precioTotal: '3.200.000',
	},
];

const VentasActualizar = () => {
	return (
		<>
			<div className='h-full flex flex-col p-3'>
				<div className='grid-rows-2 grid-cols-1 h-screen '>
					<div className='md:flex mb-2 flex justify-between'>
						<h2 className='text-lg font-medium leading-6'>Actualizar Información de Ventas</h2>
						<Link to='/VentasListar'>
							<div className='px-4 py-3 text-right sm:px-2'>
								<button type='button' className='searchButton'>
									<FontAwesomeIcon icon={faArrowLeft} className='m-1 align-middle' />
									Regresar
								</button>
							</div>
						</Link>
					</div>
					<br />
					<form action='#'>
						<div className='shadow overflow-hidden sm:rounded-md p-3'>
							<div className='tituloSeccion'>
								<span className='spanSeccion'>Información Venta</span>
							</div>
							<div className='-mx-3 md:flex mb-1'>
								<div className=' md:w-1/4 px-3'>
									<label className=' tracking-wide mb-2' htmlFor=''>
										Id Venta
									</label>
									<input className='inputTextD' id='id_venta' type='text' disabled='true' />
								</div>
								<div className=' md:w-1/4 px-3'>
									<label className=' tracking-wide mb-2' htmlFor=''>
										Fecha Venta
									</label>
									<input className='inputTextD text-gray-400' id='fecha_venta' type='date' disabled='true' />
								</div>
								<div className=' md:w-2/4 px-3'>
									<label className=' tracking-wide mb-2' htmlFor=''>
										Estado Venta
									</label>
									<select id='estado' name='estado' className='inputTextE'>
										<option>En proceso</option>
										<option>Entregada</option>
										<option>Cancelada</option>
									</select>
								</div>
							</div>
							<div className='tituloSeccion'>
								<span className='spanSeccion'>Información Cliente</span>
							</div>
							<div className='-mx-3 md:flex mb-1'>
								<div className='md:w-1/4 px-3'>
									<label className='tracking-wide  mb-2' htmlFor=''>
										Identificación
									</label>
									<input className='inputTextD' id='id_cliente' type='text' disabled='true' />
								</div>
								<div className='md:w-3/4 px-3 mb-6 md:mb-0'>
									<label className='tracking-wide mb-2' htmlFor=''>
										Nombre
									</label>
									<input className='inputTextD' id='nombre_cliente' type='text' disabled='true' />
								</div>
							</div>
							<div className='-mx-3 md:flex mb-1'>
								<div className='md:w-1/2 px-3 mb-3 md:mb-0'>
									<label className='tracking-wide mb-2' htmlFor=''>
										Direccion
									</label>
									<input className='inputTextD' id='direccion_cliente' type='text' disabled='true' />
								</div>

								<div className='md:w-1/2 px-3'>
									<label className='tracking-wide mb-2' htmlFor=''>
										Correo Electronico
									</label>
									<input className='inputTextD' id='email_cliente' type='text' disabled='true' />
								</div>
							</div>

							<div className='tituloSeccion'>
								<span className='spanSeccion'>Información Vendedor</span>
							</div>
							<div className='-mx-3 md:flex mb-1'>
								<div className='md:w-1/4 px-3'>
									<label className='tracking-wide mb-2' htmlFor=''>
										Codigo
									</label>
									<input className='inputTextD' id='id_vendedor' type='text' disabled='true' />
								</div>
								<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
									<label className='tracking-wide mb-2' htmlFor=''>
										Nombre
									</label>
									<input className='inputTextD' id='nombre_vendedor' type='text' disabled='true' />
								</div>
							</div>
							<div className='tituloSeccion'>
								<span className='spanSeccion'>Detalle de Productos</span>
							</div>

							<div className='-mx-3 md:flex mb-6'>
								<table className='min-w-full divide-y divide-gray-300'>
									<thead className='bg-gray-50'>
										<tr>
											<th scope='col' className='labelTable'>
												Codigo
											</th>
											<th scope='col' className='labelTable'>
												Decripción
											</th>
											<th scope='col' className='labelTable text-right'>
												Cantidad
											</th>
											<th scope='col' className='labelTable text-right'>
												Precio Unitario
											</th>
											<th scope='col' className='labelTable text-right'>
												Precio Total
											</th>
										</tr>
									</thead>
									<tbody className='bg-white divide-y divide-gray-300'>
										{producto.map((producto) => (
											<tr key={producto.id_producto}>
												<td className='spaceTable resultTable'>{producto.id_producto}</td>
												<td className='spaceTable resultTable'>{producto.descripcion}</td>
												<td className='spaceTable resultTable'>
													<div className='flex justify-end'>{producto.cantidad}</div>
												</td>
												<td className='spaceTable resultTable'>
													<div className='flex justify-end'>{producto.precioUnitario}</div>
												</td>
												<td className='spaceTable resultTable'>
													<div className='flex justify-end'>{producto.precioTotal}</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>

							<div className='md:flex mb-2'>
								<span className='totalVentaT'>Sub Total:</span>
								<span className='totalVentaN'>9.600.000</span>
							</div>
							<div className='md:flex mb-2'>
								<span className='totalVentaT'>Impuestos:</span>
								<span className='totalVentaN'>1.824.000</span>
							</div>
							<div className='md:flex mb-2'>
								<span className='totalVentaT'>Total:</span>
								<span className='totalVentaN'>11.424.000</span>
							</div>
							<div className='px-4 py-3 bg-gray-50 text-right sm:px-2 mb-5'>
								<button type='submit' className='searchButton'>
									Guardar
								</button>
							</div>
							<div className='bg-green-400  w-full rounded-md my-3'>
								<p className='p-2 text-center text-white'>El registro se actualizó correctamente</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default VentasActualizar;
