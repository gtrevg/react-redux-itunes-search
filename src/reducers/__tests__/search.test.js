import {
	SEARCH_FETCH_SEARCH_REQUEST,
	SEARCH_FETCH_SEARCH_SUCCESS,
	SEARCH_FETCH_SEARCH_FAILURE,
} from '../../actions';
import reducer from '../search';

describe('Search Reducer', () => {
	it('Default value', () => {
		const action = {};
		const initialState = undefined;
		const expectedState = {
			isLoading: false,
			dataSource: [],
		};
		expect(reducer(initialState, action)).toEqual(expectedState);
	});

	it('Action: SEARCH_FETCH_SEARCH_SUCCESS', () => {
		const mockResponse = [
			{
				trackId: 'trackId 01',
				trackName: 'trackName 01',
				artistName: 'artistName 01',
				collectionName: 'collectionName 01',
				releaseDate: 'releaseDate 01',
				artworkUrl60: 'artworkUrl60 01',
				trackTimeMillis: 'trackTimeMillis 01',
				primaryGenreName: 'primaryGenreName 01',
				trackPrice: 'trackPrice 01',
				currency: 'currency 01',
			},
		];

		const mockExpectedDataSource = [
			{
				key: 'trackId 01',
				title: 'trackName 01',
				artist: 'artistName 01',
				album: 'collectionName 01',
				release: 'releaseDate 01',
				cover: 'artworkUrl60 01',
				lenght: 'trackTimeMillis 01',
				genre: 'primaryGenreName 01',
				price: 'trackPrice 01 currency 01',
			},
		];

		const action = {
			type: SEARCH_FETCH_SEARCH_SUCCESS,
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
			dataSource: [],
		};
		const expectedState = {
			isLoading: false,
			dataSource: mockExpectedDataSource,
		};
		expect(reducer(initialState, action)).toEqual(expectedState);
	});

	it('Action: SEARCH_FETCH_SEARCH_REQUEST', () => {
		const action = {
			type: SEARCH_FETCH_SEARCH_REQUEST,
		};
		const initialState = {
			isLoading: false,
			dataSource: [],
		};
		const expectedState = {
			isLoading: true,
			dataSource: [],
		};
		expect(reducer(initialState, action)).toEqual(expectedState);
	});

	it('Action: SEARCH_FETCH_SEARCH_FAILURE', () => {
		const action = {
			type: SEARCH_FETCH_SEARCH_FAILURE,
		};
		const initialState = {
			isLoading: true,
			dataSource: [{ data: 1 }, { data: 2 }],
		};
		const expectedState = {
			isLoading: false,
			dataSource: [],
		};
		expect(reducer(initialState, action)).toEqual(expectedState);
	});
});
