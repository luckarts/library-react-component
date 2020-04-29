import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { Draggable } from '../../src';
import './index.css';
export const App = () => {
	const [todos, settodos] = useState(['🍰 Cake', '🍩 Donut', '🍎 Apple', '🍕 Pizza']);

	return (
		<div className="App">
			<div className="todos">
				<div className="containerDraggable">
					{todos.map((item, idx) => (
						<Draggable settodos={settodos} todos={todos} todos={todos}>
							{item}
						</Draggable>
					))}
				</div>
			</div>
		</div>
	);
};

render(<App />, document.querySelector('#demo'));
