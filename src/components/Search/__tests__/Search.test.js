import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mockComponent } from '../../../utils/testUtils';

import Search from '../index';

jest.mock('../SearchBar', () => {
	return props => mockComponent('SearchBar', props);
});

jest.mock('../SearchTable', () => {
	return props => mockComponent('SearchTable', props);
});

describe('Search component', () => {
	const component = <Search />;

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
