import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import DetailShare from '../DetailShare';

describe('DetailShare component', () => {
	const component = (
		<DetailShare
			title="Billie Jean"
			artist="Michael Jackson"
			url="https://itunes.apple.com/us/album/billie-jean/269572838?i=269573364&uo=4"
		/>
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
