import React, { useState } from 'react';
import { Masonry } from './index';
import { storiesOf } from '@storybook/react';
import './style.scss';

const style = '';
storiesOf('Galerie Masonry', module)
	.add('Masonry Default', () => {
		return (
			<Masonry className="component-masonry">
				<div style={{ height: '100px' }}>1</div>
				<div style={{ height: '50px' }}>2</div>
				<div style={{ height: '80px' }}>3</div>
				<div style={{ height: '100px' }}>4</div>
				<div>5</div>
				<div style={{ height: '120px' }}>6</div>
				<div>7</div>
				<div style={{ height: '120px' }}>8</div>
			</Masonry>
		);
	})
	.add('Masonry with props', () => {
		return (
			<Masonry columnsCountBreakPoints={{ 0: 2, 750: 4, 900: 6 }} className="component-masonry">
				<div style={{ height: '100px' }}>1</div>
				<div style={{ height: '50px' }}>2</div>
				<div style={{ height: '80px' }}>3</div>
				<div style={{ height: '100px' }}>4</div>
				<div>5</div>
				<div style={{ height: '120px' }}>6</div>
				<div>7</div>
				<div style={{ height: '120px' }}>8</div>
			</Masonry>
		);
	});
