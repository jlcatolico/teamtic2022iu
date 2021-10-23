import React, {useEffect} from 'react';

const enviaDatosAlBacken =()=>{
	console.log('Prueba boton');
}

const ProductosCrear = () => {
	return (
		<>
			<div className='h-full flex flex-col p-3'>
				<div className='grid-rows-2 grid-cols-1 h-screen '>
					<div className='md:flex mb-2 flex justify-between'>
						<h2 className='text-lg font-medium leading-6'>Registro de Producto Nuevo</h2>
					</div>
					<br />
					<form action='#'>
						<div className='shadow overflow-hidden sm:rounded-md p-3'>
							<div className='grid grid-cols-1'>
								<div>
									<label className=' tracking-wide mb-2' htmlFor=''>
										Id. Producto
									</label>
									<input type='number' name='id_producto' id='id_producto' className='inputTextE' />
								</div>

								<div>
									<label className=' tracking-wide mb-2' htmlFor=''>
										Descripcion Producto
									</label>
									<input type='text' name='descricpcion' id='descripcion' className='inputTextE' />
								</div>

								<div>
									<label className=' tracking-wide mb-2' htmlFor=''>
										Valor Unitario
									</label>
									<input type='number' name='valor-unitario' id='valor-unitario' className='inputTextE' />
								</div>

								<div>
									<label className=' tracking-wide mb-2' htmlFor=''>
										Estado Producto
									</label>
									<select id='estado' name='estado' className='inputTextE'>
										<option>Disponible</option>
										<option>No Disponible</option>
									</select>
								</div>
							</div>
							<div className='px-4 py-3 bg-gray-50 text-right sm:px-2 mb-5'>
								<button type='submit' onClick={enviaDatosAlBacken} className='searchButton col-s'>
									Guardar
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default ProductosCrear;
