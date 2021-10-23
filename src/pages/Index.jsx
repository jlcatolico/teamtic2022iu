import React from 'react';
import LOGO from 'Media/ToysCompleto.png';

const Index = () => {
	return (
		<div className="ImagenIndex w-screen">
			<div className="w-4/6 h-full flex justify-center items-center">
				<img className="h-36" src={LOGO} alt="LOGO" />
			</div>
		</div>
	);
};

export default Index;
