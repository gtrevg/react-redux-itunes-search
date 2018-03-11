import React from 'react';
import { Card } from 'antd';

import './DetailBasicInformation.css';

const DetailBasicInformation = props => {
	const { title, artist } = props;
	if (!title || !artist) return null;
	return (
		<Card
			className="DetailBasicInformation"
			hoverable={true}
			bodyStyle={{ paddingTop: '6px', paddingBottom: '3px' }}
		>
			<h2>{title}</h2>
			<h3>by {artist}</h3>
		</Card>
	);
};

export default DetailBasicInformation;
