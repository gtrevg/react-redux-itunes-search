import React from 'react';

import './DetailCover.css';

const DetailCover = props => {
	const { cover } = props;
	if (!cover) return null;
	//Trick for improving the size
	const cover300px = cover.replace('100x100bb', '300x300bb');
	return <img alt="Cover not found" src={cover300px} className="DetailCover" />;
};

export default DetailCover;
