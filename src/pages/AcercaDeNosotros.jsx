import React from 'react';
import Valen from 'Media/VALEN.png';
import Lorenzo from 'Media/LORENZO.jpg';
import Daniel from 'Media/DANIEL2.jpg';
import Ricardo from 'Media/RICARDO.png';
import Maria from 'Media/MARIA.jpg';

const AcercaDeNosotros = () => {
	return (
		<div className='ImagenAcercaDeNosotros'>
			<section className='w-screen h-full m-0 p-0'>
				<div className='relative flex justify-center h-32'>
					<div className='w-2/6'>
						<h2 className='flex justify-center text-5xl font-extrabold  text-black mt-10'>TeamTic 2022</h2>
						<h1 className='flex justify-center text 2x1 rounded-full bg-gray-700 font-bold text-blueGray-300 leading-relaxed p-2 '>
							Sprint3 y Sprint4 - Backend and Aouth
						</h1>
					</div>
				</div>
				<div className='relative flex items-center justify-between mt-20'>
					<div className='w-full'>
						<div className='px-6'>
							<img alt='VALEN' src={Valen} className='shadow-lg rounded-full mx-auto max-w-150-px' />
							<div className='pt-6 text-center shadow-lg rounded-full'>
								<h5 className='text-xl font-bold text-white font-extrabold'>Valentina Arbeláez</h5>
								<p className='mt-1 text-white font-extrabold'>Desarrolladora</p>
								<div className='mt-6'>
									<button
										className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-google'></i>
									</button>
									<button
										className='bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-twitter'></i>
									</button>
									<button
										className='bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-instagram'></i>
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className='w-full'>
						<div className='px-6'>
							<img alt='...' src={Lorenzo} className='shadow-lg rounded-full mx-auto max-w-120-px' />
							<div className='pt-6 text-center'>
								<h5 className='text-xl text-white font-extrabold'>Lorenzo Catolico</h5>
								<p className='mt-1 text-white font-extrabold'>Analista</p>
								<div className='mt-6 shadow-lg rounded-full'>
									<button
										className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-google'></i>
									</button>
									<button
										className='bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-twitter'></i>
									</button>
									<button
										className='bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-instagram'></i>
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className='w-full'>
						<div className='px-6'>
							<img alt='...' src={Daniel} className='shadow-lg rounded-full mx-auto max-w-100-px' />
							<div className='pt-6 text-center'>
								<h5 className='text-xl text-white font-extrabold'>Daniel Vasquez</h5>
								<p className='mt-1 text-white font-extrabold'>Product Owner</p>
								<div className='mt-6 shadow-lg rounded-full'>
									<button
										className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-google'></i>
									</button>
									<button
										className='bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-twitter'></i>
									</button>
									<button
										className='bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-instagram'></i>
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className='w-full'>
						<div className='px-6'>
							<img alt='...' src={Ricardo} className='shadow-lg rounded-full mx-auto max-w-120-px' />
							<div className='pt-6 text-center'>
								<h5 className='text-xl text-yellow-600 font-extrabold'>Ricardo Corredor</h5>
								<p className='mt-1 text-yellow-600 font-extrabold'>Admin DB</p>
								<div className='mt-6 shadow-lg rounded-full'>
									<button
										className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-google'></i>
									</button>
									<button
										className='bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-twitter'></i>
									</button>
									<button
										className='bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-instagram'></i>
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className='w-full'>
						<div className='px-6'>
							<img alt='...' src={Maria} className='shadow-lg rounded-full mx-auto max-w-120-px' />
							<div className='pt-6 text-center'>
								<h5 className='text-xl text-white font-extrabold'>Maria F. Medina</h5>
								<p className='mt-1 text-white font-extrabold'>Scrum Master</p>
								<div className='mt-6 shadow-lg rounded-full'>
									<button
										className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-google'></i>
									</button>
									<button
										className='bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-twitter'></i>
									</button>
									<button
										className='bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
										type='button'>
										<i className='fab fa-instagram'></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section >

			</section>
		</div>
	);
};

export default AcercaDeNosotros;
