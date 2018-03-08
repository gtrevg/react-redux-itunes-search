import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";

import Search from '../index';

describe( 'Search component', () => {

  const initialEntries = ['/'];
  const component =  <MemoryRouter initialEntries={initialEntries}><Search /></MemoryRouter>;

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
