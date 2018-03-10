import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { mockComponent } from '../utils/testUtils';

import App from '../App';

jest.mock('../components/Search', () => {
	return props => mockComponent('Search', props);
});

describe('App component', () => {
	const initialEntries = ['/'];
	const component = (
		<MemoryRouter initialEntries={initialEntries}>
			<App />
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
});
