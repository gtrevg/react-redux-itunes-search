import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import DetailControls from '../DetailControls';

describe('DetailControls component', () => {
	const component = (
		<DetailControls preview="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/c6/50/11/c6501132-e865-3711-175a-ddb79114e42f/mzaf_3806132797788612279.plus.aac.p.m4a" />
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
