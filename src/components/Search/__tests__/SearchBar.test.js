import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import SearchBar from '../SearchBar';
import store from '../../../config/mockStore';

describe( 'SearchBar component', () => {

  const initialEntries = ['/'];
  const component =
    <Provider store={store}>
      <SearchBar />
    </Provider>;

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
