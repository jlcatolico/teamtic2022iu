
import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { crearVenta } from 'utils/api';
import { obtenerProductos } from 'utils/api';
import { obtenerUsuarios } from 'utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import values from 'postcss-modules-values';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router';

const VentasActualizar = (props) => {

	//const { data } = props.location;

	const location = useLocation();
	const [datos, setDatos] = useState(location.data);

	//console.log(datos);

	const getToken = () => {
		return `Bearer ${localStorage.getItem('token')}`;
	};

	const form = useRef(null);
	const [vendedores, setVendedores] = useState([]);
	const [productos, setProductos] = useState([]);
	const [productosTabla, setProductosTabla] = useState([]);
	const [ventas, setVentas] = useState([]);
	const [ejecutarConsulta, setEjecutarConsulta] = useState([]);
	let [total, setTotal] = useState(0);

	const [edit, setEdit] = useState(false);


	useEffect(() => {

		const fetchVendores = async () => {
			await obtenerUsuarios(
				(response) => {
					setVendedores(response.data);
				},
				(error) => {
					console.error(error);
				}
			);
		};

		const fetchProductos = async () => {
			await obtenerProductos(
				(response) => {
					setProductos(response.data);
				},
				(error) => {
					console.error(error);
				}
			);
		};

		const obtenerVentas = async () => {
			const options = { method: 'GET', url: 'https://frozen-river-09078.herokuapp.com/ventas/' };

			await axios
				.request(options)
				.then(function (response) {
					setVentas(response.data);
					//console.log(ventas);
					//console.log(response.data);
				})
				.catch(function (error) {
					console.error(error);
				});
		};
		if (ejecutarConsulta) {
			obtenerVentas();
			setEjecutarConsulta(false);
		}

		fetchVendores();
		fetchProductos();
	}, []);

	const submitForm = async (e) => {
		e.preventDefault();
		const fd = new FormData(form.current);

		const nuevaVenta = {};

		const formData = {};
		fd.forEach((value, key) => {
			formData[key] = value;
		});

		console.log('form data', formData);

		const listaProductos = Object.keys(formData)
			.map((k) => {
				if (k.includes('producto')) {
					return productosTabla.filter((v) => v._id === formData[k])[0];
				}
				return null;
			})
			.filter((v) => v);

		const datosVenta = {
			vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
			cantidad: formData.valor_venta,
			productos: listaProductos,
			totalVenta: formData.totalVenta,
			fecha: formData.fecha,
			estado: formData.estado,
			id_cliente: formData.id_cliente,
			nombre_cliente: formData.nombre_cliente,
		};

		const options = {
			method: 'PATCH',
			url: `https://frozen-river-09078.herokuapp.com/ventas/${datos._id}`,
			headers: { 'Content-Type': 'application/json' },
			data: { ...datosVenta },
		};

		await axios
			.request(options)
			.then(function (response) {
				//console.log(response.data);
				toast.success('Venta modificada con éxito');
				setEjecutarConsulta(true);
				setEdit(false);
			})
			.catch(function (error) {
				console.error(error);
				toast.error('La venta no se pudo modificar');
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
						<button className='searchButton'>
							<Link to='/VentasListado'>
								<FontAwesomeIcon icon={faArrowLeft} className='m-1 align-middle mx-2' />
								Regresar
							</Link>
						</button>
					</div>
				</div>
			</div>

			<div className='grid justify-items-center'>
				<div className='my-3'>
					<h2 className='text-lg font-medium text-gray-600'>Editar Venta</h2>
				</div>
				<div className='my-3'>
					<form ref={form} onSubmit={submitForm}>
						<div className='shadow overflow-hidden sm:rounded-md p-3'>
							<div className='grid grid-cols-1'>
								<div>
									<div className='grid grid-cols-2 items-center'>
										<label className='tracking-wide mb-2'>Fecha
										</label>
										<input value={datos.fecha} type='date' name='fecha' className='inputTextE text-gray-600 w-64' onChange={(e) => setDatos({ ...datos, fecha: e.target.value })}/>
									</div>
									<div className='grid grid-cols-2 items-center'>
										<label className='tracking-wide mb-2' htmlFor='vendedor'>Vendedor</label>
										<select value={datos.vendedor._id} name='vendedor' className='inputTextE text-gray-600 w-64' defaultValue='' required>
											<option disabled value=''>
												Seleccione un Vendedor
											</option>
											{vendedores.map((el) => {
												return (<option key={nanoid()} onChange={(a) => setVendedores(vendedores.filter((v) => v._id === a.target.value)[0])} value={el._id}>{`${el.nombre} ${el.apellido}`}</option>);
											})}
										</select>
										</div>
									<div className='grid grid-cols-2 items-center'>
										<label className='tracking-wide mb-2'>ID Cliente
										</label>
										<input value={datos.id_cliente} type='text' name='id_cliente' className='inputTextE text-gray-600 w-64' onChange={(e) => setDatos({ ...datos, id_cliente: e.target.value })}/>
									</div>
									<div className='grid grid-cols-2 items-center'>
										<label className='tracking-wide mb-2'>Nombre Cliente
										</label>
										<input value={datos.nombre_cliente} type='text' name='nombre_cliente' className='inputTextE text-gray-600 w-64' onChange={(e) => setDatos({ ...datos, nombre_cliente: e.target.value })}/>
									</div>

									<TablaProductos productos={productos} setProductos={setProductos} setProductosTabla={setProductosTabla} total={total} setTotal={setTotal} datos={datos} />

									<div className='grid grid-cols-2 items-center'>
										<label className='tracking-wide mb-2'>Estado
										</label>
										<select value={datos.estado} name='estado' className='inputTextE text-gray-600 w-48' onChange={(e) => setDatos({ ...datos, estado: e.target.value })}>
											<option disabled value=''>Seleccione un Estado</option>
											<option>En progreso</option>
											<option>Completada</option>
											<option>Cancelada</option>
										</select>
									</div>
									<div className='grid justify-items-center'>
										<button type='submit' className='normalButton justify-items-center my-10'>
											<Link to='/VentasListado'>
												<FontAwesomeIcon icon={faCheck} className='m-1 align-middle mx-2' />
												Modificar Venta
											</Link>
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>

				</div>
				<ToastContainer position='bottom-center' autoClose={2000} />
			</div>
		</div>
	);
};

const TablaProductos = ({ productos, setProductos, setProductosTabla, total, setTotal, datos }) => {
	const [productoAgregar, setProductoAgregar] = useState({});
	const [filasTabla, setFilasTabla] = useState(datos.productos);
	const [cantidadProducto, setCantidadProducto] = useState([0]);
	const [modificar, setModificar] = useState(true);

	useEffect(() => {

		setTotal(datos.totalVenta);

		console.log('Filas tabla 1: ', filasTabla);

		//	});
	}, []);


	useEffect(() => {
		console.log('filasTabla useefect', filasTabla);
		setProductosTabla(filasTabla);
	}, [filasTabla, setProductosTabla]);

	const agregarNuevoProducto = async (modificar) => {

		console.log('Ingreso a nuevo producto ', productoAgregar);


		const valorTotal = parseInt(productoAgregar["precio_unitario"]) * parseInt(cantidadProducto);
		const ventaAcomulada = parseInt(total) + parseInt(valorTotal);

		//console.log('total producto', valorTotal);
		//console.log('total venta acomulada', ventaAcomulada);

		productoAgregar['cantidad'] = cantidadProducto;
		productoAgregar['valor_total'] = valorTotal;

		setTotal(ventaAcomulada);

		//console.log('producto con cantidad', productoAgregar);

		if (productoAgregar.id_producto) {

			if (cantidadProducto > 0) {

				setFilasTabla([...filasTabla, productoAgregar]);
				setProductos(productos.filter((v) => v._id !== productoAgregar._id));
				//		console.log(productoAgregar);
				setProductoAgregar({});
			} else {
				//		console.error('cantidad en cero')
				toast.error('La cantidad debe ser mayor a cero');
			}

		} else {
			toast.error('Debe ingresar el producto');
		}

	};

	const eliminarProducto = (productoEliminar) => {

		const ventaAcomulada = parseInt(total) - parseInt(productoEliminar['valor_total']);
		setTotal(ventaAcomulada);
		setFilasTabla(filasTabla.filter((v) => v._id !== productoEliminar._id));
		setProductos([...productos, productoEliminar]);

	};

	const modificarProducto = (producto, cantidad) => {

		setFilasTabla(
			filasTabla.map((ft) => {
				if (ft._id === producto.id) {
					ft.cantidad = cantidad;
					ft.total = producto.precio_unitario * cantidad;
				}
				return ft;
			})
		);
	};



	return (
		<div>
			<div className='flex justify align-middle my-6'>
				<label className='flex flex-col' htmlFor='producto'>
					<select className='inputTextE text-gray-600' value={productoAgregar._id ?? ''} onChange={(e) => setProductoAgregar(productos.filter((v) => v._id === e.target.value)[0])}>
						<option disabled value=''>Seleccione un Producto</option>
						{productos.map((el) => {
							return (<option key={nanoid()} value={el._id}>{`${el.descripcion}`}</option>
							);
						})}
					</select>
				</label>

				<label htmlFor='cantidad' className='mx-3'>Cantidad
					<input type='number' name='cantidad' className='spacetable inputTextE w-24 mx-3' onChange={(e) => setCantidadProducto(e.target.value)} />
				</label>


				<div className='flex items-center'>
					<button type='button' onClick={() => agregarNuevoProducto()} className='normalButton'>
						<FontAwesomeIcon icon={faPlus} className='m-1 align-middle mx-2' />
						Agregar Producto
					</button>
				</div>

			</div>
			<table className='min-w-full divide-y divide-gray-200 my-6'>
				<thead className='bg-gray-50'>
					<tr>
						<th className='labelTable'>Id Producto</th>
						<th className='labelTable'>Descripcion</th>
						<th className='labelTable'>Valor unitario</th>
						<th className='labelTable'>Estado</th>
						<th className='labelTable'>Unidades</th>
						<th className='labelTable'>Valor Total</th>
						<th className='labelTable'>Eliminar</th>
						<th className='labelTable hidden'>Input</th>
					</tr>
				</thead>
				<tbody>
					{filasTabla.map((el, index) => {
						// return <FilaProducto key={el._id} prod={el} index={index} eliminarProducto={eliminarProducto} modificarProducto={modificarProducto} />;
						return (
							<tr key={nanoid()}>
								<td className='spaceTable resultTable'>{el.id_producto}</td>
								<td className='spaceTable resultTable'>{el.descripcion}</td>
								<td className='spaceTable resultTable text-right'>{el.precio_unitario}</td>
								<td className='spaceTable resultTable'>{el.estado}</td>
								<td className='spaceTable resultTable'>{el.cantidad}</td>
								<td className='spaceTable resultTable'>{el.valor_total}</td>

								<td className='spaceTable resultTable text-center'>
									<i
										onClick={() => eliminarProducto(el)}
										className='fas fa-minus text-red-500 cursor-pointer'
									/>
								</td>
								<input hidden defaultValue={el._id} name={`producto${index}`} />
							</tr>
						);
					})}
				</tbody>
			</table>

			<div className='grid grid-cols-2 items-center'>
				<label className='tracking-wide mb-2'>
					Valor Total Venta
				</label>
				<input readOnly='readonly' value={total} type='number' name='totalVenta' id='totalVenta' className='inputTextD text-right w-48 text-gray-600' required />
			</div>

		</div>
	);
};

export default VentasActualizar;
