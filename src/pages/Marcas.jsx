import React from 'react';
import Disney from 'Media/Disney.png';
import FisherPrice from 'Media/FisherPrice.png';
import FOX from 'Media/FOX.png';
import Hasbro from 'Media/Hasbro.png';
import HotWheels from 'Media/HotWheels.png';
import LEGO from 'Media/LEGO.jpg';
import PlayDoh from 'Media/PlayDoh.png';
import LOGO from 'Media/IconoToys.png';

const Marcas = () => {
	return (
		<div className="ImagenMarcas w-screen flex flex-row">
			<div className="w-1/2 h-full grid grid-rows-3 grid-flow-col gap4 "></div>
			<div className="w-1/2 h-full grid grid-rows-3 grid-flow-col gap4 ">
				<div className="row-span-3 flex justify-center items-center bg-red-600 ">
					<button>
						<img className="w-auto" src={LEGO} alt="LEGO" />
					</button>
				</div>
				<div className="col-span-2 flex justify-center items-center">
				<button>
						<img className="w-auto" src={FisherPrice} alt="FisherPrice" />
					</button>
				</div>
				<div className="flex justify-center items-center">
				<button>
						<img className="w-auto" src={FOX} alt="FOX" />
					</button>
				</div>
				<div className="flex justify-center items-center">
				<button>
						<img className="w-auto" src={Hasbro} alt="Hasbro" />
					</button>
				</div>
				<div className="row-span-2 col-span-2 flex justify-center items-center">
				<button>
						<img className="w-auto" src={Disney} alt="Disney" />
					</button>
				</div>
				<div className="col-span-2 flex justify-center items-center">
				<button>
						<img className="w-auto" src={HotWheels} alt="HotWheels" />
					</button>
				</div>
				<div className="flex justify-center items-center">
				<button>
						<img className="w-auto" src={PlayDoh} alt="PlayDoh" />
					</button>
				</div>
				<div className="flex justify-center items-center">
				<button>
						<img className="w-auto" src={LOGO} alt="TOYS" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Marcas;