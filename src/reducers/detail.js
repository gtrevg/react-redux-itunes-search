import {
	DETAIL_FETCH_SEARCH_REQUEST,
	DETAIL_FETCH_SEARCH_SUCCESS,
	DETAIL_FETCH_SEARCH_FAILURE,
} from '../actions';

const defaultState = {
	isLoading: false,
	track: {},
};

const extractMainData = item => {
	const {
		trackId,
		trackName,
		artistName,
		artworkUrl100,
		previewUrl,
		trackViewUrl,
	} = item;

	return {
		key: trackId,
		title: trackName,
		artist: artistName,
		cover: artworkUrl100,
		preview: previewUrl,
		url: trackViewUrl,
	};
};

export default function(state = defaultState, action) {
	switch (action.type) {
		case DETAIL_FETCH_SEARCH_REQUEST:
			return { ...state, isLoading: true };

		case DETAIL_FETCH_SEARCH_SUCCESS: {
			const { results } = action.payload.response.data;
			if (results.length === 1) {
				return {
					track: results.map(extractMainData)[0],
					isLoading: false,
				};
			} else {
				return { ...defaultState };
			}
		}

		case DETAIL_FETCH_SEARCH_FAILURE:
			return { ...defaultState };

		default:
			return state;
	}
}
