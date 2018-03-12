import React from 'react';

import './DetailCover.css';

const DetailCover = props => {
	const { bigCover } = props;
	if (!bigCover) return null;
	//Trick for improving the size
	const bigCover300px = bigCover.replace('100x100bb', '300x300bb');
	return (
		<img alt="Cover not found" src={bigCover300px} className="DetailCover" />
	);
};

export default DetailCover;
