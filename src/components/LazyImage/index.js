import React, { useEffect, useState } from 'react';

const placeHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';

export const LazyImage = ({ src, placeholder, alt }) => {
	let observer;
	const [imageSrc, setImageSrc] = useState(placeHolder);
	const [imageRef, setImageRef] = useState();

	useEffect(() => {
		let didCancel = false;
		let option = {
			threshold: 0.2,
			rootMargin: '75%',
		};

		if (imageRef) {
			if (IntersectionObserver) {
				observer = new IntersectionObserver((entries) => lazyload(entries, observer, didCancel), option);
				observer.observe(imageRef);
			} else {
				setImageSrc(src);
			}
		}
		return () => {
			didCancel = true;
			setImageSrc(placeholder);

			if (observer && observer.unobserve) {
				observer.unobserve(imageRef);
			}
		};
	}, [imageRef, setImageSrc]);

	const lazyload = async (entries, observer, didCancel) => {
		entries.forEach((entry) => {
			let img = entry.target;

			if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
				setImageSrc(src);
				observer.unobserve(imageRef);
			}
		});
	};
	return <img alt={alt} src={imageSrc} ref={setImageRef} />;
};
