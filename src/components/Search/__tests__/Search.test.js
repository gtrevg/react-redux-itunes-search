import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from "react-router-dom";

import Search from '../index';
import store from '../../../config/mockStore';

describe( 'Search component', () => {

  const initialEntries = ['/'];
  const component =
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries}>
        <Search />
      </MemoryRouter>
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
