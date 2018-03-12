import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Button, Icon } from 'antd';

const lookUpIdIndex = (id, dataSource) => {
	return dataSource.findIndex(item => item.key === id);
};

const getPreviousItem = (idIndex, dataSource) => {
	if (idIndex === 0) return null;
	return dataSource[idIndex - 1];
};

const getNextItem = (idIndex, dataSource) => {
	if (idIndex === dataSource.lenght - 1) return null;
	return dataSource[idIndex + 1];
};

class DetailPrevNext extends PureComponent {
	static contextTypes = {
		router: PropTypes.object,
	};

	getDataSource() {
		if (!this.context.router.history.location) return [];
		if (!this.context.router.history.location.state) return [];
		if (!this.context.router.history.location.state.dataSource) return [];
		return this.context.router.history.location.state.dataSource;
	}

	goToDetail(item, dataSource) {
		if (!item) return;
		const { changeTrack } = this.props;
		changeTrack(item);
		this.context.router.history.push({
			pathname: '/detail',
			search: `?id=${item.key}`,
			state: { dataSource },
		});
	}

	getTitle(item) {
		if (!item) return null;
		return `${item.title} by ${item.artist}`;
	}

	render() {
		const { id } = this.props;
		const dataSource = this.getDataSource();

		const idIndex = lookUpIdIndex(id, dataSource);
		if (idIndex >= 0) {
			const previousItem = getPreviousItem(idIndex, dataSource);
			const nextItem = getNextItem(idIndex, dataSource);
			return (
				<Button.Group size="large">
					<Tooltip placement="bottomRight" title={this.getTitle(previousItem)}>
						<Button
							type="primary"
							style={{ width: '120px', margin: '10px' }}
							ghost={previousItem === null}
							onClick={() => this.goToDetail(previousItem, dataSource)}
						>
							<Icon type="left" />
							Next
						</Button>
					</Tooltip>
					<Tooltip placement="bottomLeft" title={this.getTitle(nextItem)}>
						<Button
							type="primary"
							style={{ width: '120px', margin: '10px' }}
							ghost={nextItem === null}
							onClick={() => this.goToDetail(nextItem, dataSource)}
						>
							Previous
							<Icon type="right" />
						</Button>
					</Tooltip>
				</Button.Group>
			);
		} else {
			return null;
		}
	}
}

export default DetailPrevNext;
