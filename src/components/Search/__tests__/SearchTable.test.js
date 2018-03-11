import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import SearchTable from '../SearchTable';
import store from '../../../config/mockStore';

describe('SearchTable component', () => {
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
