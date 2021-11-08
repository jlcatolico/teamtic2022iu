
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

const Ventas = () => {

	const getToken = () => {
		return `Bearer ${localStorage.getItem('token')}`;
	};

	const form = useRef(null);
	const [vendedores, setVendedores] = useState([]);
	const [productos, setProductos] = useState([]);
	const [productosTabla, setProductosTabla] = useState([]);
	const history = useHistory();
	const [mostrarTabla, setMostrarTabla] = useState(true);
	const [textoBoton, setTextoBoton] = useState('Crear Venta');
	const [ventas, setVentas] = useState([]);
	const [ejecutarConsulta, setEjecutarConsulta] = useState([]);

	let [total, setTotal] = useState(0);

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

		fetchVendores();
		fetchProductos();
	}, []);

	const submitForm = async (e) => {
		e.preventDefault();
		const fd = new FormData(form.current);

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

		console.log('lista antes de cantidad', listaProductos);


		console.log('lista después de cantidad y valor total', listaProductos);

		const datosVenta = {
			vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
			cantidad: formData.valor_venta,
			productos: listaProductos,
			totalVenta: formData.totalVenta,
			fecha: formData.fecha,
			estado: formData.estado
		};

		const options = {
			method: 'POST',
			url: 'https://frozen-river-09078.herokuapp.com/ventas/',
			headers: { 'Content-Type': 'application/json', Autorization: getToken(), },
			data: datosVenta,
		};

		console.log('option ejecutados');

		await axios.request(options)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.log('error');
				console.error(error);
			});
		console.log('enviado');
		toast.success('venta agregada con exito');
		history.push('/VentasListado');
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
					<h2 className='text-lg font-medium text-gray-600'>Nueva Venta</h2>
				</div>
				<div className='my-3'>
					<form ref={form} onSubmit={submitForm}>
						<div className='shadow overflow-hidden sm:rounded-md p-3'>
							<div className='grid grid-cols-1'>
								<div>
									<div className='grid grid-cols-2 items-center'>
										<label className='tracking-wide mb-2'>Fecha
										</label>
										<input type='date' name='fecha' className='inputTextE text-gray-600 w-64' />
									</div>
									<div className='grid grid-cols-2 items-center'>
										<label className='tracking-wide mb-2' htmlFor='vendedor'>Vendedor</label>
										<select name='vendedor' className='inputTextE text-gray-600 w-64' defaultValue='' required>
											<option disabled value=''>
												Seleccione un Vendedor
											</option>
											{vendedores.map((el) => {
												return (<option key={nanoid()} onChange={(a) => setVendedores(vendedores.filter((v) => v._id === a.target.value)[0])} value={el._id}>{`${el.nombre} ${el.apellido}`}</option>);
											})}
										</select>
									</div>

									<TablaProductos productos={productos} setProductos={setProductos} setProductosTabla={setProductosTabla} total={total} setTotal={setTotal} />

									<div className='grid grid-cols-2 items-center'>
										<label className='tracking-wide mb-2'>Estado
										</label>
										<select name='estado' className='inputTextE text-gray-600 w-48'>
											<option disabled value=''>Seleccione un Estado</option>
											<option>En progreso</option>
											<option>Completada</option>
											<option>Cancelada</option>
										</select>
									</div>
									<div className='grid justify-items-center'>
									<button type='submit' className='normalButton justify-items-center my-10'>
										<FontAwesomeIcon icon={faCheck}className='m-1 align-middle mx-2' />
										Crear Venta
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

const TablaProductos = ({ productos, setProductos, setProductosTabla, total, setTotal }) => {
	const [productoAgregar, setProductoAgregar] = useState({});
	const [filasTabla, setFilasTabla] = useState([]);

	const [cantidadProducto, setCantidadProducto] = useState([0]);

	useEffect(() => {
		console.log(productoAgregar);
	}, [productoAgregar]);

	useEffect(() => {
		console.log('filasTabla', filasTabla);
		setProductosTabla(filasTabla);
	}, [filasTabla, setProductosTabla]);

	const agregarNuevoProducto = () => {

		console.log('valor unitario', productoAgregar["precio_unitario"]);

		const valorTotal = parseInt(productoAgregar["precio_unitario"]) * parseInt(cantidadProducto);
		const ventaAcomulada = parseInt(total) + parseInt(valorTotal);

		console.log('total producto', valorTotal);
		console.log('total venta acomulada', ventaAcomulada);

		productoAgregar['cantidad'] = cantidadProducto;
		productoAgregar['valor_total'] = valorTotal;

		setTotal(ventaAcomulada);

		console.log('producto con cantidad', productoAgregar);

		if (productoAgregar.id_producto) {

			if (cantidadProducto > 0) {

				setFilasTabla([...filasTabla, productoAgregar]);
				setProductos(productos.filter((v) => v._id !== productoAgregar._id));
				console.log(productoAgregar);
				setProductoAgregar({});
			} else {
				console.error('cantidad en cero')
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
					<input type='number' name='cantidad' className='spacetable inputTextE w-24 mx-3' onChange={(e) => setCantidadProducto(e.target.value)} required />
				</label>


				<div className='flex items-center'>
					<button type='button' onClick={() => agregarNuevoProducto()} className='normalButton'>
					<FontAwesomeIcon icon={faPlus}className='m-1 align-middle mx-2' />
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
				<input readOnly='readonly' type='number' value={total} name='totalVenta' id='totalVenta' className='inputTextD text-right w-48 text-gray-600' required />
			</div>

		</div>
	);
};


export default Ventas;