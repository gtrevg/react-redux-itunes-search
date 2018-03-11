import React from 'react';
import {
	FacebookShareButton,
	GooglePlusShareButton,
	TwitterShareButton,
	FacebookIcon,
	GooglePlusIcon,
	TwitterIcon,
} from 'react-share';

import './DetailShare.css';

const DetailShare = props => {
	const { title, artist, url } = props;
	const text = `Listening ${title} by ${artist}`;
	return (
		<div>
			<FacebookShareButton
				className="DetailShareButton"
				children={<FacebookIcon size={48} round={true} />}
				quote={text}
				url={url}
			/>
			<GooglePlusShareButton
				className="DetailShareButton"
				children={<GooglePlusIcon size={48} round={true} />}
				url={url}
			/>
			<TwitterShareButton
				className="DetailShareButton"
				children={<TwitterIcon size={48} round={true} />}
				title={text}
				url={url}
			/>
		</div>
	);
};

export default DetailShare;
