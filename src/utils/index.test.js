import React from 'react';
import { shallow } from 'enzyme';
import { useWindowDimensions } from './useWindowDimensions';

let wrapper;

function fireResize(width) {
	window.innerWidth = width;
	window.dispatchEvent(new Event('resize'));
}

function EffecfulComponent() {
	const { width } = useWindowDimensions();

	return <span>{width}</span>;
}

describe('should show updated window width', () => {
	beforeAll(() => {
		wrapper = shallow(<EffecfulComponent />);
	});
	it('passes them to the img element', () => {
		expect(wrapper.text()).toEqual('1024');
	});
});

describe('should show updated window widt ', () => {
	beforeAll(() => {
		fireResize('340');
		wrapper = shallow(<EffecfulComponent />);
	});

	it('passes them to the img element 2', () => {
		expect(wrapper.text()).toEqual('340');
	});
});
