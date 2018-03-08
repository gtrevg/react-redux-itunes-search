import axios from 'axios';

export const SEARCH_FETCH_SEARCH = 'SEARCH@FETCH_SEARCH';
export const SEARCH_FETCH_SEARCH_REQUEST = 'SEARCH@FETCH_SEARCH/REQUEST';
export const SEARCH_FETCH_SEARCH_SUCCESS = 'SEARCH@FETCH_SEARCH/SUCCESS';
export const SEARCH_FETCH_SEARCH_FAILURE = 'SEARCH@FETCH_SEARCH/FAILURE';

const URL_API_ITUNES = 'https://itunes.apple.com/search'

export const fetchSearch = (term) => {
  const url = `${URL_API_ITUNES}?media=music&term=${term.replace(' ', '+')}`;
  const meta = { term };
  return doFetch(SEARCH_FETCH_SEARCH, url, meta);
}

/*
 * Extracted from: https://github.com/reactjs/redux/issues/1676
 ***/
export const doFetch = (type, url, meta = {}) => {

    // Redux Thunk will inject dispatch here:
    return dispatch => {

        // Reducers may handle this to set a flag like isFetching
        dispatch({
            type: type + '/REQUEST',
            payload: {
                meta
            }
        })

        //The response function
        const theResponse = (response) => {
            dispatch({
                type: type + '/SUCCESS',
                payload: {
                    response,
                    meta
                }
            });
        }

        //The error function
        const theError = (error) => {
            dispatch({
                type: type + '/FAILURE',
                payload: {
                    error,
                    meta
                }
            });
        }

        // Perform the actual API call
        return axios.get(url).then(theResponse, theError);
    }
}
