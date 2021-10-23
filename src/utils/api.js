import axios from 'axios';

//Productos

export const obtenerProductos = async (successCallback, errorCallback) => {
	const options = {method: 'GET', url: 'https://frozen-river-09078.herokuapp.com/productos/'};

	await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
	const options = {
		method: 'POST',
		url: 'https://frozen-river-09078.herokuapp.com/productos/',
		headers: {'Content-Type': 'application/json'},
		data,
	};

	await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async (id, data, successCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `https://frozen-river-09078.herokuapp.com/productos/${id}/`,
		headers: {'Content-Type': 'application/json'},
		data,
	};

	await axios.request(options).then(successCallback).catch(errorCallback);
};

export const deleteProducto = async (id, successCallback, errorCallback) => {
    const options = {
      method: 'DELETE',
      url: `https://frozen-river-09078.herokuapp.com/productos/${id}/`,
      headers: { 'Content-Type': 'application/json',},
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  //Usuarios

  export const obtenerUsuarios = async (successCallback, errorCallback) => {
    const options = {
		method: 'GET',
		url: `https://frozen-river-09078.herokuapp.com/usuarios`};
        await axios.request(options).then(successCallback).catch(errorCallback);
  };

  //Ventas

  export const crearVenta = async (successCallback, errorCallback) => {
    const options = {
		method: 'PATCH',
		url: `https://frozen-river-09078.herokuapp.com/ventas`};
        await axios.request(options).then(successCallback).catch(errorCallback);
  };

  export const obtenerVentas = async (successCallback, errorCallback) => {
    const options = {
		method: 'GET',
		url: `https://frozen-river-09078.herokuapp.com/ventas`};
        await axios.request(options).then(successCallback).catch(errorCallback);
  };