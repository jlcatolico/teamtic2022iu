import React from 'react';

const ServicioAlCliente = () => {
	return (
		<div class="flex justify-center items-center w-screen h-screen bg-white">
			<div class="container mx-auto my-auto lg:px-20">

				<div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
					<div class="flex">
						<h1 class="font-bold uppercase text-5xl">Envianos un <br /> mensaje</h1>
					</div>
					<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
						<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
							type="text" placeholder="First Name*" />
						<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
							type="text" placeholder="Last Name*" />
						<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
							type="email" placeholder="Email*" />
						<input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
							type="number" placeholder="Phone*" />
					</div>
					<div class="my-4">
						<textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
					</div>
					<div class="my-2 w-1/2 lg:w-1/4">
						<button class="uppercase text-sm font-bold tracking-wide bg-yellow-500 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
							Enviar
						</button>
					</div>
				</div>

				<div
					class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-yellow-500 rounded-2xl">
					<div class="flex flex-col text-white">
						<h1 class="font-bold uppercase text-4xl my-4">Dejalo en nuestra oficina</h1>
						<p class="text-white">
							Visitanos, quizas resolvamos tus inconvenientes y conozcas un lugar donde las risas se hacen realidad
						</p>

						<div class="flex my-4 w-2/3 lg:w-1/2">
							<div class="flex flex-col">
								<i class="fas fa-map-marker-alt pt-2 pr-2" />
							</div>
							<div class="flex flex-col">
								<h2 class="text-2xl">Oficina Principal</h2>
								<p class="text-gray-200">Calle 12 # 12 e 40, Arboleda del Rio, Pereira, Risaralda</p>
							</div>
						</div>

						<div class="flex my-4 w-2/3 lg:w-1/2">
							<div class="flex flex-col">
								<i class="fas fa-phone-alt pt-2 pr-2" />
							</div>
							<div class="flex flex-col">
								<h2 class="text-2xl">Call Us</h2>
								<p class="text-gray-200">Tel: 321-642-0201</p>
								<p class="text-gray-200">Fax: 108.834.427</p>
							</div>
						</div>

						<div class="flex my-4 w-2/3 lg:w-1/2">
							<a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
								<i class="fab fa-facebook-f text-blue-900" />
							</a>
							<a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
								<i class="fab fa-linkedin-in text-blue-900" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicioAlCliente;