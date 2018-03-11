import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mockComponent } from '../../../utils/testUtils';

import Detail from '../index';
import store from '../../../config/mockStore';

jest.mock('../DetailBasicInformation', () => {
	return props => mockComponent('DetailBasicInformation', props);
});

jest.mock('../DetailControls', () => {
	return props => mockComponent('DetailControls', props);
});

jest.mock('../DetailCover', () => {
	return props => mockComponent('DetailCover', props);
});

jest.mock('../DetailPrevNext', () => {
	return props => mockComponent('DetailPrevNext', props);
});

jest.mock('../DetailShare', () => {
	return props => mockComponent('DetailShare', props);
});

describe('Detail component', () => {
	const initialEntries = ['/', '/detail'];
	const component = (
		<Provider store={store}>
			<MemoryRouter initialEntries={initialEntries}>
				<Detail />
			</MemoryRouter>
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
