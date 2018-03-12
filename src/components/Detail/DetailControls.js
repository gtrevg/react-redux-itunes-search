import React from 'react';

const DetailControls = props => {
	const { preview } = props;
	if (!preview) return null;
	return (
		<div>
			<audio src={preview} controls>
				Sorry, your browser does not support the audio element.
			</audio>
		</div>
	);
};

export default DetailControls;
