import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';

import DetailBasicInformation from './DetailBasicInformation';
import DetailCover from './DetailCover';
import DetailControls from './DetailControls';
import DetailPrevNext from './DetailPrevNext';
import DetailShare from './DetailShare';

import { fetchSearchById } from '../../actions';

class Detail extends PureComponent {
	componentDidMount() {
		const { fetchSearchById, location } = this.props;
		if (location && location.search) {
			const { id } = qs.parse(location.search);
			if (id) fetchSearchById(id);
		}
	}

	render() {
		const { detail, search } = this.props;
		const { track } = detail;
		const { key, title, artist, cover, preview } = track;
		return (
			<div className="Detail">
				<DetailBasicInformation artist={{ artist }} title={{ title }} />
				<DetailCover cover={{ cover }} />
				<DetailControls preview={{ preview }} />
				<DetailPrevNext key={{ key }} search={{ search }} />
				<DetailShare artist={{ artist }} title={{ title }} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { detail, search } = state;
	return { detail, search };
};

export default connect(mapStateToProps, { fetchSearchById })(Detail);
