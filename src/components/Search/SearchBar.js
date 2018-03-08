import React from 'react';
import { Input } from 'antd';

import './SearchBar.css';

const Search = Input.Search;

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <Search
          placeholder="Search for artists, songs, albums, genre,... Whatever!"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)} />
        </div>
  );
};

export default SearchBar;
