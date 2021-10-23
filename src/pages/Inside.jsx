import React from 'react';
import LOGO from 'Media/ToysCompleto.png';

const Inside = () => {
	return (
		<div className="ImagenIndex w-full h-full">
			<div className="w-4/6 h-full flex justify-center items-center">
				<img className="h-36" src={LOGO} alt="LOGO" />
			</div>
		</div>
	);
};

export default Inside;