import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { LazyImage } from '../../src';
import './index.css';
export const App = () => {
	return (
		<div className="App">
			<div className="">
				<LazyImage src={'https://bachelart.fr/img/tableau.jpg'} placeholder={'https://bachelart.fr/thumb/img/tableau.jpg'} />
				<LazyImage src={'https://bachelart.fr/img/painting-lyly.jpg'} placeholder={'https://bachelart.fr/thumb/img/tableau.jpg'} />
				<LazyImage src={'https://bachelart.fr/img/tableau.jpg'} placeholder={'https://bachelart.fr/thumb/img/tableau.jpg'} />
				<LazyImage src={'https://bachelart.fr/img/InspiredCampion.jpg'} placeholder={'https://bachelart.fr/thumb/img/tableau.jpg'} />
			</div>
		</div>
	);
};

render(<App />, document.querySelector('#demo'));
