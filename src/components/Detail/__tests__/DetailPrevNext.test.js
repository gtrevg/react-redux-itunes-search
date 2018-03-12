import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { Button } from 'antd';

import DetailPrevNext from '../DetailPrevNext';
import store from '../../../config/mockStore';

const dataSource = [
	{
		album: 'Bad',
		artist: 'Michael Jackson',
		cover:
			'http://is2.mzstatic.com/image/thumb/Music/v4/05/c4/1c/05c41ca0-b614-a91c-e63e-2fd9a59d19e8/source/60x60bb.jpg',
		genre: 'Pop',
		key: 559334764,
		lenght: 257766,
		price: '1.29 USD',
		release: '1987-08-31T07:00:00Z',
		title: 'Smooth Criminal',
	},
	{
		album: 'Thriller',
		artist: 'Michael Jackson',
		cover:
			'http://is4.mzstatic.com/image/thumb/Music/v4/ec/2b/17/ec2b170d-2ecb-50af-02eb-39f0decc2847/source/60x60bb.jpg',
		genre: 'Pop',
		key: 269573364,
		lenght: 294188,
		price: '1.29 USD',
		release: '1982-11-30T08:00:00Z',
		title: 'Billie Jean',
	},
	{
		album: 'The Essential Michael Jackson',
		artist: 'Michael Jackson',
		cover:
			'http://is2.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg',
		genre: 'Pop',
		key: 159294478,
		lenght: 320905,
		price: '1.29 USD',
		release: '1987-08-31T07:00:00Z',
		title: 'Man In the Mirror',
	},
];

describe('DetailPrevNext component', () => {
	const id = 269573364;
	const changeTrack = jest.fn();
	const initialEntries = [
		{
			pathname: '/detail',
			search: `?id=${id}`,
			state: { dataSource },
		},
	];
	const component = (
		<MemoryRouter initialEntries={initialEntries}>
			<DetailPrevNext id={id} changeTrack={changeTrack} />
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

	it('Check the previous button', () => {
		const tree = TestUtils.renderIntoDocument(component);
		const buttons = TestUtils.scryRenderedComponentsWithType(tree, Button);
		const prevButtonOnClick = buttons[0].props.onClick;

		tree.history.push = jest.fn();
		prevButtonOnClick();

		expect(tree.history.push).toBeCalled();
		const expectedParameter = {
			pathname: '/detail',
			search: `?id=559334764`,
			state: {
				dataSource,
			},
		};
		expect(tree.history.push).toBeCalledWith(expectedParameter);
		expect(changeTrack).toBeCalledWith(dataSource[0]);
	});

	it('Check the next button', () => {
		const tree = TestUtils.renderIntoDocument(component);
		const buttons = TestUtils.scryRenderedComponentsWithType(tree, Button);
		const nextButtonOnClick = buttons[1].props.onClick;

		tree.history.push = jest.fn();
		nextButtonOnClick();

		expect(tree.history.push).toBeCalled();
		const expectedParameter = {
			pathname: '/detail',
			search: `?id=159294478`,
			state: {
				dataSource,
			},
		};
		expect(tree.history.push).toBeCalledWith(expectedParameter);
		expect(changeTrack).toBeCalledWith(dataSource[2]);
	});
});
