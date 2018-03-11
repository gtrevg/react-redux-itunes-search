import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import DetailBasicInformation from '../DetailBasicInformation';

describe('DetailBasicInformation component', () => {
	const component = (
		<DetailBasicInformation title="Billie Jean" artist="Michael Jackson" />
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
