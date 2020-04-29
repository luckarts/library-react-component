import React from 'react';
import { mount } from 'enzyme';
import { Masonry } from './index';
let wrapper;
let props = {
	columnsCountBreakPoints: { 0: 2, 750: 3, 900: 4 },
	setStyleMasonry: jest.fn(),
};
const MasonryProps = (
	<Masonry {...props}>
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
	</Masonry>
);
const MasonryWithoutProps = (
	<Masonry>
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
	</Masonry>
);

describe('Masonry Component wihtout props ', () => {
	beforeEach(() => {
		wrapper = mount(MasonryWithoutProps);
	});

	it('renders correctly', () => {
		expect(wrapper.find('div').length).toBe(3);
	});
});
describe('Masonry Component wihtout props width innerWith = 350', () => {
	beforeEach(() => {
		window.innerWidth = 350;
		wrapper = mount(MasonryWithoutProps);
	});

	it('renders correctly', () => {
		expect(wrapper.find('.test').length).toBe(3);
	});
});
describe('Masonry Component with props width default window innerwidth > 900', () => {
	beforeEach(() => {
		window.innerWidth = 1200;
		wrapper = mount(MasonryProps);
	});

	it('renders correctly', () => {
		expect(wrapper.find('.test').length).toBe(4);
	});
});
describe('Masonry Component with props width default window innerwidth < 900', () => {
	beforeEach(() => {
		window.innerWidth = 800;
		wrapper = mount(MasonryProps);
	});

	it('renders correctly', () => {
		expect(wrapper.find('.test').length).toBe(3);
	});
});
describe('Masonry Component with props width default window innerwidth < 750', () => {
	beforeEach(() => {
		window.innerWidth = 350;
		wrapper = mount(MasonryProps);
	});

	it('renders correctly', () => {
		expect(wrapper.find('.test').length).toBe(2);
	});
});
