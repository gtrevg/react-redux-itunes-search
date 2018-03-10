import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'antd';
import moment from 'moment';

import './SearchTable.css';

const getDate = text => moment(text).format('DD/MM/YYYY');

const getDuration = text => {
	const minutes = moment.duration(text).minutes() + '';
	const seconds = moment.duration(text).seconds() + '';
	return minutes.padStart(2, '0') + ':' + seconds.padStart(2, '0');
};

const columns = [
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
		className: 'SearchTableTitle',
	},
	{
		title: 'Artist',
		dataIndex: 'artist',
		key: 'artist',
		className: 'SearchTableArtist',
	},
	{
		title: 'Album title',
		dataIndex: 'album',
		key: 'album',
		className: 'SearchTableAlbum',
	},
	{
		title: 'Release date',
		dataIndex: 'release',
		key: 'release',
		className: 'SearchTableRelease',
		render: getDate,
	},
	{
		title: 'Cover',
		dataIndex: 'cover',
		key: 'cover',
		className: 'SearchTableCover',
		render: (text, record) => (
			<img alt={record.title} src={text} style={{ width: 60 }} />
		),
	},
	{
		title: 'Lenght',
		dataIndex: 'lenght',
		key: 'lenght',
		className: 'SearchTableLenght',
		render: getDuration,
	},
	{
		title: 'Genre',
		dataIndex: 'genre',
		key: 'genre',
		className: 'SearchTableGenre',
	},
	{
		title: 'Price',
		dataIndex: 'price',
		key: 'price',
		className: 'SearchTablePrice',
	},
];

class SearchTable extends PureComponent {
	static contextTypes = {
		router: PropTypes.object,
	};

	goToDetail(id) {
		this.context.router.history.push(`/detail?id=${id}`);
	}

	render() {
		const { isLoading, dataSource } = this.props;
		return (
			<div className="SearchTable">
				<Table
					loading={isLoading}
					dataSource={dataSource}
					columns={columns}
					pagination={{ pageSize: 5 }}
					onRow={record => {
						return {
							onClick: () => this.goToDetail(record.key),
						};
					}}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		...state.search,
	};
};

export default connect(mapStateToProps)(SearchTable);
