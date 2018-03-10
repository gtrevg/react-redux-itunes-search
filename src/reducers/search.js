import { SEARCH_FETCH_SEARCH_REQUEST, SEARCH_FETCH_SEARCH_SUCCESS, SEARCH_FETCH_SEARCH_FAILURE } from '../actions';

const defaultState = {
  isLoading: false,
  dataSource: []
};

const extractMainData = (item) => {
  const {
    trackId,
    trackName,
    artistName,
    collectionName,
    releaseDate,
    artworkUrl60,
    trackTimeMillis,
    primaryGenreName,
    trackPrice,
    currency
  } = item;

  return {
    key: trackId,
    title: trackName,
    artist: artistName,
    album: collectionName,
    release: releaseDate,
    cover: artworkUrl60,
    lenght: trackTimeMillis,
    genre: primaryGenreName,
    price: trackPrice < 0 ? '-' : `${trackPrice} ${currency}`
  }
}

export default function(state = defaultState, action) {
  switch (action.type) {

    case SEARCH_FETCH_SEARCH_REQUEST:
      return { ...state, isLoading: true };

    case SEARCH_FETCH_SEARCH_SUCCESS: {
      const { results } = action.payload.response.data;
      return { dataSource: results.map(extractMainData), isLoading: false };
    }

    case SEARCH_FETCH_SEARCH_FAILURE:
      return { ...defaultState };

    default:
      return state;
  }
}
