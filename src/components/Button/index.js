import React, { useState, useEffect } from 'react';
import './style.scss';
export const Button = ({ type, children, color, variante, rounded, href }) => {
	const props = ['native', color, variante, rounded];

	const [className, setclassName] = useState('');
	let button = 'button-';

	useEffect(() => {
		let newArray = [];
		props.forEach((prop) => {
			prop && newArray.push(button + prop);
		});
		setclassName(newArray.join(' '));
	}, [props]);

	return [
		href ? (
			<a href={href} key={1} className={className}>
				{children}
			</a>
		) : (
			<button type={type} key={2} className={className}>
				{children}
			</button>
		),
	];
};
