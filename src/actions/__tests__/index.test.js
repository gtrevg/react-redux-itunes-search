import { SEARCH_FETCH_SEARCH_REQUEST, SEARCH_FETCH_SEARCH_SUCCESS } from '../index';
import { doFetch, fetchSearch } from '../index';

describe('Action creators: ', () => {

  it('fetchSearch', async () => {
    // prepare
    const expected = [
        { type: SEARCH_FETCH_SEARCH_REQUEST, payload: {meta: {term: 'Michael Jackson'}} },
        { type: SEARCH_FETCH_SEARCH_SUCCESS, payload: {meta: {term: 'Michael Jackson'}, response: {}}  }
    ];

    // mock the dispatch and getState functions from Redux thunk.
    const dispatch = jest.fn();
    const getState = jest.fn(
      () => {}
    );

    // execute
    await fetchSearch('Michael Jackson')(dispatch, getState);

    // verify
    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
  })

});

describe('Auxiliar functions of actions creators: ', () => {

  it('doFetch', async () => {
    // prepare
   const type = "MY_TYPE";
   const url = "http://myUrl:1234";
   const expected = [
       { type: type + '/REQUEST',
         payload: {
             meta: {},
         }
       },
       { type: type + '/SUCCESS',
           payload: {
               meta: {},
               response: {}
           }
       }
   ];

   // mock the dispatch and getState functions from Redux thunk.
   const dispatch = jest.fn();
   const getState = jest.fn(
     () => {
       return {}
     }
   );

   // execute
   await doFetch(type, url)(dispatch, getState);

   // verify
   expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
   expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
  })
});
