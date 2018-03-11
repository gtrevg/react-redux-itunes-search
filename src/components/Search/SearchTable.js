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

const sort = (itemA, itemB) => {
	if (itemA > itemB) return 1;
	if (itemA < itemB) return -1;
	return 0;
};

const getPriceWithoutUnits = priceWithUnits => {
	const priceWithoutUnitsAsText = priceWithUnits.substr(
		0,
		priceWithUnits.indexOf(' ')
	);
	const priceWithoutUnits = parseFloat(priceWithoutUnitsAsText);
	return priceWithoutUnits;
};

const columns = [
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
		className: 'SearchTableTitle',
		sorter: (a, b) => sort(a.title, b.title),
	},
	{
		title: 'Artist',
		dataIndex: 'artist',
		key: 'artist',
		className: 'SearchTableArtist',
		sorter: (a, b) => sort(a.artist, b.artist),
	},
	{
		title: 'Album title',
		dataIndex: 'album',
		key: 'album',
		className: 'SearchTableAlbum',
		sorter: (a, b) => sort(a.album, b.album),
	},
	{
		title: 'Release date',
		dataIndex: 'release',
		key: 'release',
		className: 'SearchTableRelease',
		render: getDate,
		sorter: (a, b) => sort(a.release, b.release),
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
		sorter: (a, b) => sort(a.lenght, b.lenght),
	},
	{
		title: 'Genre',
		dataIndex: 'genre',
		key: 'genre',
		className: 'SearchTableGenre',
		sorter: (a, b) => sort(a.genre, b.genre),
	},
	{
		title: 'Price',
		dataIndex: 'price',
		key: 'price',
		className: 'SearchTablePrice',
		sorter: (a, b) =>
			sort(getPriceWithoutUnits(a.price), getPriceWithoutUnits(b.price)),
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
