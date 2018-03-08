import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';

import './SearchBar.css';
import { fetchSearch } from '../../actions';

const Search = Input.Search;

const SearchBar = (props) => {
  const { fetchSearch } = props;
  return (
    <div className="SearchBar">
      <Search
          placeholder="Search for artists, songs, albums, genre,... Whatever!"
          enterButton="Search"
          size="large"
          onSearch={value => fetchSearch(value)} />
        </div>
  );
};

export default connect(null, { fetchSearch })(SearchBar);
