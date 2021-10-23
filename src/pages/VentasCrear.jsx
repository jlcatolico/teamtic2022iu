import React from 'react';

const producto = [
    {
        id_producto: '00034',
        descripcion: 'Televisor lg 42 Pulgadas',
        cantidad: '2',
        precioUnitario: '2.300.000',
        precioTotal: '4.600.000',
    },
    {
        id_producto: '00012',
        descripcion: 'mini componente sony 300',
        cantidad: '3',
        precioUnitario: '600.000',
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

const VentasCrear = () => {
    return (
        <>
            <div className='h-full flex flex-col p-3'>
                <div className='grid-rows-2 grid-cols-1 h-screen '>
                    <div className='md:flex mb-2 flex justify-between'>
                        <h2 className='text-lg font-medium leading-6'>Creacion de Ventas</h2>
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
                                    <input className='inputTextE' type='password' name='id_venta' id='id_venta' maxLength='5' minLength='5' />
                                </div>
                                <div className=' md:w-1/4 px-3'>
                                    <label className=' tracking-wide mb-2' htmlFor=''>
                                        Fecha Venta
                                    </label>
                                    <input className='inputTextE text-gray-400' id='fecha_venta' type='date' />
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
                                    <input className='inputTextE' id='id_cliente' type='text' />
                                </div>
                                <div className='md:w-3/4 px-3 mb-6 md:mb-0'>
                                    <label className='tracking-wide mb-2' htmlFor=''>
                                        Nombre
                                    </label>
                                    <input className='inputTextE' id='nombre_cliente' type='text' />
                                </div>
                            </div>
                            <div className='-mx-3 md:flex mb-1'>
                                <div className='md:w-1/2 px-3 mb-3 md:mb-0'>
                                    <label className='tracking-wide mb-2' htmlFor=''>
                                        Direccion
                                    </label>
                                    <input className='inputTextE' id='direccion_cliente' type='text' />
                                </div>

                                <div className='md:w-1/2 px-3'>
                                    <label className='tracking-wide mb-2' htmlFor=''>
                                        Correo Electronico
                                    </label>
                                    <input className='inputTextE' id='email_cliente' type='text' />
                                </div>
                            </div>

                            <div className='tituloSeccion'>
                                <span className='spanSeccion'>Información Vendedor</span>
                            </div>
                            <div className='-mx-3 md:flex mb-1'>
                                <div className='md:w-1/4 px-3'>
                                    <label className='tracking-wide mb-2' htmlFor=''>
                                        Código
                                    </label>
                                    <input className='inputTextE' id='id_vendedor' type='text' />
                                </div>
                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label className='tracking-wide mb-2' htmlFor=''>
                                        Nombre
                                    </label>
                                    <input className='inputTextE' id='nombre_vendedor' type='text' />
                                </div>
                            </div>

                            <div class='tituloSeccion'>
                                <span class='spanSeccion'>Detalle de producto</span>
                            </div>

                            <div class='-mx-3 md:flex mb-1'>
                                <div class='md:w-1/6 px-3 md:mb-1'>
                                    <label class=' tracking-wide mb-2' htmlFor=''>
                                        Código
                                    </label>
                                    <input class=' inputTextE' id='id_producto' type='text' placeholder='00032' />
                                </div>

                                <div class='md:w-4/6 px-3 md:mb-1'>
                                    <label class=' tracking-wide mb-2' htmlFor=''>
                                        Descripcion
                                    </label>
                                    <input
                                        class='inputTextD'
                                        id='descripcion_producto'
                                        type='text'
                                        placeholder='Licuadora Oster 5000'
                                        disabled='true'
                                    />
                                </div>

                                <div class='md:w-1/6 px-3 md:mb-1'>
                                    <label class=' tracking-wide mb-2' htmlFor=''>
                                        Cantidad
                                    </label>
                                    <input class='inputTextE' id='cantidad' type='number' placeholder='2' />
                                </div>

                                <div class='md:w-1/6 px-3 md:mb-1'>
                                    <label class=' tracking-wide mb-2' htmlFor=''>
                                        Precio Unitario
                                    </label>
                                    <input class='inputTextD' id='precio_producto' type='number' placeholder='370.000' disabled='true' />
                                </div>

                                <div class='md:w-1/6 px-3 md:mb-1'>
                                    <label class=' tracking-wide mb-2' htmlFor=''>
                                        Precio Total
                                    </label>
                                    <input class='inputTextD' id='total' type='number' placeholder='740.000' disabled='true' />
                                </div>

                                <div class='md:w-1/6 px-2 py-6 md:mb-1 my-1'>
                                    <button type='submit' className='searchButton'>
                                        + Adicionar
                                    </button>
                                </div>
                            </div>

                            <div class='-mx-3 tituloSeccion'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th scope='col' className='labelTable'>
                                                id_producto
                                            </th>
                                            <th scope='col' className='labelTable'>
                                                Descripcion
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
                                    <tbody className='bg-white divide-y divide-gray-200'>
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

                            <div class='md:flex mb-2'>
                                <span class='totalVentaT'>Sub Total: </span>
                                <span class='totalVentaN'>9.600.000</span>
                            </div>

                            <div class='md:flex mb-2'>
                                <span class='totalVentaT'>Impuestos: </span>
                                <span class='totalVentaN'>1.824.000</span>
                            </div>

                            <div class='md:flex mb-2'>
                                <span class='totalVentaT'>Total: </span>
                                <span class='totalVentaN'>11.424.000</span>
                            </div>

                            <div className='px-4 py-3 bg-gray-50 text-right sm:px-2 mb-5'>
                                <button type='submit' className='searchButton'>
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


export default VentasCrear;
