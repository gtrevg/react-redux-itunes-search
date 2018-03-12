import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import qs from 'query-string';

import './index.css';

import DetailBasicInformation from './DetailBasicInformation';
import DetailCover from './DetailCover';
import DetailControls from './DetailControls';
import DetailPrevNext from './DetailPrevNext';
import DetailShare from './DetailShare';

import { fetchSearchById, changeTrack } from '../../actions';

class Detail extends PureComponent {
	componentDidMount() {
		const { fetchSearchById, location } = this.props;
		if (location && location.search) {
			const { id } = qs.parse(location.search);
			if (id) fetchSearchById(id);
		}
	}

	render() {
		const { detail, changeTrack } = this.props;
		const { isLoading, track } = detail;

		// Maybe we haven't load the data
		if (Object.keys(track).length === 0 && track.constructor === Object)
			return null;

		const { key, title, artist, bigCover, preview, url } = track;
		return (
			<Spin spinning={isLoading} size="large" wrapperClassName="Detail">
				<DetailBasicInformation title={title} artist={artist} />
				<DetailCover bigCover={bigCover} />
				<DetailControls preview={preview} />
				<DetailPrevNext id={key} changeTrack={changeTrack} />
				<Link to="/">
					<p className="DetailReturnLink">Return to search</p>
				</Link>
				<DetailShare artist={artist} title={title} url={url} />
			</Spin>
		);
	}
}

const mapStateToProps = state => {
	const { detail } = state;
	return { detail };
};

export default connect(mapStateToProps, { fetchSearchById, changeTrack })(
	Detail
);
