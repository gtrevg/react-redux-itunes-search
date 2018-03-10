import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { Table } from 'antd';

import SearchTable from '../SearchTable';
import store from '../../../config/mockStore';

describe('SearchTable component', () => {
	const initialEntries = ['/'];
	const component = (
		<Provider store={store}>
			<SearchTable />
		</Provider>
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
});
