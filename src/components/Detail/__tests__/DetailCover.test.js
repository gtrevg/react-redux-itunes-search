import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import DetailCover from '../DetailCover';

describe('DetailCover component', () => {
	const component = (
		<DetailCover bigCover="http://is2.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/300x300bb.jpg" />
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
