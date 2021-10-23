import React from 'react';
import Bebe from 'Media/Bebe.jpg';
import Niña from 'Media/Niña.jpg';
import Adolescente from 'Media/Adolescentes.jpg';
import Adulto from 'Media/Adultos.jpg';

const Edades = () => {
	return (
		<div className="ImagenEdades ">
			<div className="w-screen h-full flex flex-row justify-center items-center">
				<div className="w-64 h-38 p-30 m-10 flex justify-center items-center" >
					<button className="text-white px-3 py-2 rounded-lg text-lg font-extrabold hover:bg-white hover:text-yellow-600 hover:font-extrabold hover:border-white hover:border-4">
						<img className="w-64 h-38 rounded-full" src={Bebe} alt="Bebe" />
						BEBES
					</button>
				</div>
				<div className="w-64 h-38 p-30 m-10 flex justify-center items-center" >
					<button className="text-white px-3 py-2 rounded-lg text-lg font-extrabold hover:bg-white hover:text-yellow-600 hover:font-extrabold hover:border-white hover:border-4">
						<img className="w-64 h-38 rounded-full" src={Niña} alt="Niña" />
						NIÑOS
					</button>
				</div>
				<div className="w-64 h-38 p-30 m-10 flex justify-center items-center" >
					<button className="text-white px-3 py-2 rounded-lg text-lg font-extrabold hover:bg-white hover:text-yellow-600 hover:font-extrabold hover:border-white hover:border-4">
						<img className="w-64 h-38 rounded-full" src={Adolescente} alt="Adolescente" />
						ADOLESCENTES
					</button>
				</div>
				<div className="w-64 h-38 p-30 m-10 flex justify-center items-center" >
					<button className="text-white px-3 py-2 rounded-lg text-lg font-extrabold hover:bg-white hover:text-yellow-600 hover:font-extrabold hover:border-white hover:border-4">
						<img className="w-64 h-30 rounded-full" src={Adulto} alt="Adulto" />
						ADULTOS
					</button>
				</div>
			</div>
		</div>
	);
};

export default Edades;