import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Table } from 'antd';

import SearchTable from '../SearchTable';
import store from '../../../config/mockStore';

describe('SearchTable component', () => {
	const initialEntries = ['/'];
	const component = (
		<MemoryRouter initialEntries={initialEntries}>
			<Provider store={store}>
				<SearchTable />
			</Provider>
		</MemoryRouter>
	);

	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(component, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('Snapshot matchs', () => {
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('Check that on row click launchs an action', () => {
		const tree = TestUtils.renderIntoDocument(component);
		const table = TestUtils.findRenderedComponentWithType(tree, Table);
		const { onRow } = table.props;
		const key = 123;
		const record = { key };
		const onRowOnClickCallback = onRow(record).onClick;

		tree.history.push = jest.fn();
		onRowOnClickCallback();

		expect(tree.history.push).toBeCalled();
		const expectedParameter = {
			pathname: '/detail',
			search: `?id=${key}`,
			state: {
				dataSource: store.getState().search.dataSource,
			},
		};
		expect(tree.history.push).toBeCalledWith(expectedParameter);
	});
});
