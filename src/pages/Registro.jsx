import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from 'Media/ToysCompleto.png';
import ToysCompleto from 'Media/ToysCompleto.png';

const Registro = () => {
	return (
		<div>
			<section className='w-screen flex items-stretch text-white '>
				<div
					className='lg:flex w-1/2 hidden bg-gray-800 bg-no-repeat bg-cover relative items-center ImagenRegistro'
					style={{
						backgroundImage:
							'https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
					}}>
					<div className='absolute bg-black opacity-60 inset-0 z-0'></div>
					<div className='w-full px-24 z-10'>
						<div className="w-full h-full flex justify-center items-center">
							<img className="h-36" src={LOGO} alt="LOGO" />
						</div>
						<p className='text-3xl my-8 text-center font-extrabold'>Sprint 3 y 4 - MinTic 2022</p>
					</div>
					<div className='bottom-0 absolute p-2 text-center right-0 left-0 flex justify-center space-x-4 '>
						<a href='' className='text-white ml-1'>
							<i className='fab fa-facebook-f'></i>
						</a>
						<a href='' className='ml-1 text-white'>
							<i className='fab fa-twitter'></i>
						</a>
						<a href='' className='ml-1 text-white'>
							<i className='fab fa-instagram'></i>
						</a>
					</div>
				</div>
				<div className='lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0'>
					<div className='absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center'>
						<div className='absolute bg-black opacity-60 inset-0 z-0'></div>
					</div>
					<div className='w-full pt-2 pb-1 z-20'>
						<h1 className='my-3'>
							<img className='w-auto h-28 inline-flex' src={ToysCompleto} alt='TOYS' />
							<p className='text-3xl mt-3 mb-1 text-black font-extrabold'>Register</p>
						</h1>
						<div className='py-6 space-x-2'>
							<a href=''>
								<span className='w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg text-yellow-600 border-2 border-yellow-600'>
									f
								</span>
							</a>
							<a href=''>
								<span className='w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg text-yellow-600 border-2 border-yellow-600'>
									G+
								</span>
							</a>
							<a href=''>
								<span className='w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg text-yellow-600 border-2 border-yellow-600'>
									in
								</span>
							</a>
						</div>
						<p className='text-gray-400'>Or use your email</p>
						<form action='' className='sm:w-2/3 w-full px-4 lg:px-0 mx-auto'>
							<div className='pb-2 pt-4'>
								<input
									type='text'
									name='nombres'
									placeholder='Nombres'
									className='block w-full p-2 text-lg rounded bg-black'
								/>
							</div>
							<div className='pb-2 pt-4'>
								<input
									type='text'
									name='Apellidos'
									placeholder='Apellidos'
									className='block w-full p-2 text-lg rounded bg-black'
								/>
							</div>
							<div className='pb-2 pt-4'>
								<input
									type='email'
									name='email'
									id='email'
									placeholder='Email'
									className='block w-full p-2 text-lg rounded bg-black'
								/>
							</div>
							<div className='pb-2 pt-4'>
								<input
									type='email'
									name='email'
									id='email'
									placeholder='Confirm your Email'
									className='block w-full p-2 text-lg rounded bg-black'
								/>
							</div>
							<span className='pt-4 flex justify-start text-lg text-black'>Fecha de nacimiento</span>
							<div className='pb-2 pt-0'>
								<input
									type='date'
									name='Fecha de Nacimiento'
									placeholder='Fecha de nacimiento'
									className='text-gray-400 block w-full p-2 text-lg rounded bg-black'
								/>
							</div>
							<div className='pb-2 pt-4'>
								<select
									name='OS'
									className='rounded border-black text-gray-400 flex justify-start w-full p-2 text-lg bg-black'>
									<option value='0' disabled='true'>
										Sexo
									</option>
									<option value='1'>Masculino</option>
									<option value='2'>Femenino</option>
									<option value='3'>Otro</option>
								</select>
							</div>
							<div className='pb-2 pt-4'>
								<input
									type='password'
									name='clave'
									placeholder='Password'
									className='block w-full p-2 text-lg rounded bg-black'
								/>
							</div>
							<div className='pb-2 pt-4'>
								<input
									className='block w-full p-2 text-lg rounded bg-black'
									type='password'
									name='password'
									id='password'
									placeholder='Confirm Password'
								/>
							</div>
							<div className=' w-full flex flex-row p6'>
								<div className='text-gray-400 inline-flex justify-start hover:underline hover:text-gray-900'>
									<input type='checkbox'></input>
									<div className='text-gray-400 pl-2 mr-36'> Remember me</div>
								</div>
								<Link to='/Login'>
									<div className='text-right text-gray-400 hover:underline hover:text-gray-900'>
										<a href='#'>Ya tienes una cuenta?</a>
									</div>
								</Link>
							</div>
							<div className='px-4 pb-2 pt-4'>
								<Link to='/Login'>
									<button className='block w-full p-2 text-lg border border-2 border-yellow-600 rounded-full bg-yellow-600 hover:bg-white hover:text-yellow-600 focus:outline-none font-extrabold'>
										Register
									</button>
								</Link>
							</div>

							<div className='p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden '>
								<a href='#'>
									<svg fill='#fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
										<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
									</svg>
								</a>
								<a href='#'>
									<svg fill='#fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
										<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
									</svg>
								</a>
								<a href='#'>
									<svg fill='#fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
										<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
									</svg>
								</a>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Registro;
