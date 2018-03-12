import React from 'react';
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

const DetailPrevNext = props => {
	const { id, dataSource } = props;
	const idIndex = lookUpIdIndex(id, dataSource);
	if (idIndex >= 0) {
		const previousItem = getPreviousItem(idIndex, dataSource);
		const nextItem = getNextItem(idIndex, dataSource);
		return (
			<Button.Group size="large">
				<Tooltip
					placement="bottomRight"
					title={`${previousItem.title} by ${previousItem.artist}`}
				>
					<Button
						type="primary"
						style={{ width: '120px', margin: '10px' }}
						href={`/detail?id=${previousItem.key}`}
					>
						<Icon type="left" />
						Next
					</Button>
				</Tooltip>
				<Tooltip
					placement="bottomLeft"
					title={`${nextItem.title} by ${nextItem.artist}`}
				>
					<Button
						type="primary"
						style={{ width: '120px', margin: '10px' }}
						href={`/detail?id=${nextItem.key}`}
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
};

export default DetailPrevNext;
