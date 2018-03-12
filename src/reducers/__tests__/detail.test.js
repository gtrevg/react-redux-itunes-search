import {
	DETAIL_FETCH_SEARCH_REQUEST,
	DETAIL_FETCH_SEARCH_SUCCESS,
	DETAIL_FETCH_SEARCH_FAILURE,
} from '../../actions';
import reducer from '../detail';

describe('Detail Reducer', () => {
	it('Default value', () => {
		const action = {};
		const initialState = undefined;
		const expectedState = {
			isLoading: false,
			track: {},
		};
		expect(reducer(initialState, action)).toEqual(expectedState);
	});

	it('Action: DETAIL_FETCH_SEARCH_SUCCESS', () => {
		const mockResponse = [
			{
				trackId: 'trackId 01',
				trackName: 'trackName 01',
				artistName: 'artistName 01',
				artworkUrl100: 'artworkUrl100 01',
				previewUrl: 'previewUrl 01',
				trackViewUrl: 'trackViewUrl 01',
			},
		];

		const mockExpectedDetail = {
			key: 'trackId 01',
			title: 'trackName 01',
			artist: 'artistName 01',
			bigCover: 'artworkUrl100 01',
			preview: 'previewUrl 01',
			url: 'trackViewUrl 01',
		};

		const action = {
			type: DETAIL_FETCH_SEARCH_SUCCESS,
			payload: {
				response: {
					data: {
						results: mockResponse,
					},
				},
			},
		};
		const initialState = {
			isLoading: true,
			track: {},
		};
		const expectedState = {
			isLoading: false,
			track: mockExpectedDetail,
		};
		expect(reducer(initialState, action)).toEqual(expectedState);
	});

	it('Action: DETAIL_FETCH_SEARCH_REQUEST', () => {
		const action = {
			type: DETAIL_FETCH_SEARCH_REQUEST,
		};
		const initialState = {
			isLoading: false,
			track: {},
		};
		const expectedState = {
			isLoading: true,
			track: {},
		};
		expect(reducer(initialState, action)).toEqual(expectedState);
	});

	it('Action: DETAIL_FETCH_SEARCH_FAILURE', () => {
		const action = {
			type: DETAIL_FETCH_SEARCH_FAILURE,
		};
		const initialState = {
			isLoading: true,
			track: { propA: 'a', propB: 'b' },
		};
		const expectedState = {
			isLoading: false,
			track: {},
		};
		expect(reducer(initialState, action)).toEqual(expectedState);
	});
});
