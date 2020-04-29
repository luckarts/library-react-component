import React from 'react';
import { Button } from './index';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module).add('Button primary', () => {
	return (
		<div>
			<Button color="primary">Click me</Button>,
			<Button color="primary" variante="solid" key={1}>
				Click me
			</Button>
			<Button color="primary" variante="solid" rounded="rounded">
				Click me
			</Button>
			<Button color="primary" variante="solid" rounded="rounded" href="https://bachelart.fr/img/tableau.jpg">
				Click me
			</Button>
		</div>
	);
});
