import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { LazyImage } from './index';

let wrapper, props;
props = {
	src: 'https://bachelart.fr/img/study_color2.jpg',
	alt: 'study_color2',
	placeholderSrc: 'https://bachelart.fr/thumb/img/study_color2.jpg',
};

describe('Galerie Component with children props', () => {
	beforeEach(() => {
		wrapper = shallow(<LazyImage {...props} />);
	});
	it('renders an img without a src attribute', () => {
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
describe('when it mounts', () => {
	const mockRef = { mock: true };
	const windowIntersectionObserver = window.IntersectionObserver;
	const observe = jest.fn();

	beforeAll(() => {
		window.IntersectionObserver = jest.fn(function() {
			this.observe = observe;
		});

		wrapper = shallow(<LazyImage {...props} />, {
			disableLifecycleMethods: true,
		});
		wrapper.getElement().ref(mockRef);
		wrapper.instance().componentDidMount();
	});
});
describe('with additional properties', () => {
	beforeAll(() => {
		wrapper = shallow(<LazyImage {...props} />, {
			disableLifecycleMethods: true,
		});
	});

	it('passes them to the img element', () => {
		expect(wrapper.getElement()).toMatchSnapshot();
	});
});
