import 'styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import PublicLayout from 'layouts/PublicLayout';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import Index from 'pages/Index';
import Productos from 'pages/Productos';
import VentasActualizar from 'pages/VentasActualizar';
import Ventas from 'pages/Ventas';
import Inside from 'pages/Inside';
import Usuarios from 'pages/Usuarios';
import AcercaDeNosotros from 'pages/AcercaDeNosotros';
import Marcas from 'pages/Marcas';
import Edades from 'pages/Edades';
import Categorias from 'pages/Categorias';
import ServicioAlCliente from 'pages/ServicioAlCliente';
import VentasListado from 'pages/VentasListado';
import { Auth0Provider } from "@auth0/auth0-react";


function App() {
	return (
		<Auth0Provider
			domain='misiontic-teamtic2022.us.auth0.com'
			clientId='MIcna23UC1pxqrntWCDKM22RQAz4MsyY'
			audience='api-autenticacion-gestorventas-teamtic'
			redirectUri='http://localhost:3000/inside'
			// redirectUri='https://still-woodland-55233.herokuapp.com/inside'
			>
			<div>
				<Router>
					<Switch>
						<Route path={['/login', '/registro']}>
							<AuthLayout>
								<Switch>
									<Route path='/login'>
										<Login />
									</Route>
									<Route path='/registro'>
										<Registro />
									</Route>
								</Switch>
							</AuthLayout>
						</Route>
						<Route
							path={[
								'/Inside',
								'/Productos',
								'/Usuarios',
								'/VentasActualizar',
								'/Ventas',
								'/VentasListado',
							]}>
							<PrivateLayout>
								<Switch>
									<Route path='/Inside'>
										<Inside />
									</Route>
									<Route path='/Productos'>
										<Productos />
									</Route>
									<Route path='/Usuarios'>
										<Usuarios />
									</Route>
									<Route path='/VentasActualizar'>
										<VentasActualizar />
									</Route>
									<Route path='/VentasListado'>
										<VentasListado />
									</Route>
									<Route path='/Ventas'>
										<Ventas />
									</Route>

								</Switch>
							</PrivateLayout>
						</Route>
						<Route
							path={[
								'/',
								'/Marcas',
								'/Edades',
								'/Categorias',
								'/ServicioAlCliente',
								'/AcercaDeNosotros',
							]}>
							<PublicLayout>
								<Switch>
									<Route path='/Marcas'>
										<Marcas />
									</Route>
									<Route path='/Edades'>
										<Edades />
									</Route>
									<Route path='/Categorias'>
										<Categorias />
									</Route>
									<Route path='/ServicioAlCliente'>
										<ServicioAlCliente />
									</Route>
									<Route path='/AcercaDeNosotros'>
										<AcercaDeNosotros />
									</Route>
									<Route path='/'>
										<Index />
									</Route>
								</Switch>
							</PublicLayout>
						</Route>
					</Switch>
				</Router>
			</div>
		</Auth0Provider>

	);
}

export default App;
