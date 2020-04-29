import React from 'react';
import { LazyImage } from './index';
import { storiesOf } from '@storybook/react';
import { Masonry } from '../Masonry';
import './style.scss';

storiesOf('LazyImage', module)
	.add('Image', () => {
		return [
			<LazyImage
				className="single"
				src="https://bachelart.fr/img/tableau.jpg"
				alt="study_color2"
				placeholder="https://bachelart.fr/thumb/img/tableau.jpg"
			/>,
			<LazyImage
				className="single"
				src="https://bachelart.fr/img/tableau.jpg"
				alt="study_color2"
				placeholder="https://bachelart.fr/thumb/img/tableau.jpg"
			/>,
			<LazyImage
				className="single"
				src="https://bachelart.fr/img/tableau.jpg"
				alt="study_color2"
				placeholder="https://bachelart.fr/thumb/img/tableau.jpg"
			/>,
			<LazyImage
				className="single"
				src="https://bachelart.fr/img/tableau.jpg"
				alt="study_color2"
				placeholder="https://bachelart.fr/thumb/img/tableau.jpg"
			/>,
		];
	})
	.add('Galery', () => {
		return (
			<Masonry columnsCountBreakPoints={{ 0: 2, 900: 3 }}>
				<LazyImage src="https://bachelart.fr/img/tableau.jpg" alt="tableau.jpg" placeholderSrc="https://bachelart.fr/thumb//img/tableau.jpg" />
				<LazyImage src="https://bachelart.fr/img/study_color2.jpg" alt="study_color2" placeholder="https://bachelart.fr/thumb/img/study_color2.jpg" />
				<LazyImage
					src="https://bachelart.fr/img/painting_river_mark.jpg"
					alt="study_color2"
					placeholder="https://bachelart.fr//img/painting_river_mark.jpg"
				/>
				<LazyImage src="https://bachelart.fr/img/study_color2.jpg" alt="study_color2" placeholder="https://bachelart.fr/thumb/img/study_color2.jpg" />
				<LazyImage src="https://bachelart.fr/img/study_color2.jpg" alt="study_color2" placeholder="https://bachelart.fr/thumb/img/study_color2.jpg" />
				<LazyImage src="https://bachelart.fr/img/study_color2.jpg" alt="study_color2" placeholder="https://bachelart.fr/thumb/img/study_color2.jpg" />
				<LazyImage src="https://bachelart.fr/img/study_color2.jpg" alt="study_color2" placeholder="https://bachelart.fr/thumb/img/study_color2.jpg" />
				<LazyImage src="https://bachelart.fr/img/study_color2.jpg" alt="study_color2" placeholder="https://bachelart.fr/thumb/img/study_color2.jpg" />
				<LazyImage src="https://bachelart.fr/img/study_color2.jpg" alt="study_color2" placeholder="https://bachelart.fr/thumb/img/study_color2.jpg" />
				<LazyImage src="https://bachelart.fr/img/study_color2.jpg" alt="study_color2" placeholder="https://bachelart.fr/thumb/img/study_color2.jpg" />
				<LazyImage src="https://bachelart.fr/img/study_color2.jpg" alt="study_color2" placeholder="https://bachelart.fr/thumb/img/study_color2.jpg" />
			</Masonry>
		);
	});
