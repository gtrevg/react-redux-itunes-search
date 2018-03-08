import configureMockStore from 'redux-mock-store';
import middlewares from './middlewares';

const mockStore = configureMockStore(middlewares);

const store = mockStore({
  search: {},
  detail: {}
});

export default store;
