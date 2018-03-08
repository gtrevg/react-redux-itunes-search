import React from 'react';
import { Table } from 'antd';

import './SearchTable.css';

const dataSourceMock = [
  {
    key: '1',
    title: 'Smooth criminal',
    artist: 'Michael Jackson',
    album: 'Bad',
    release: '21/10/1988',
    cover: 'https://upload.wikimedia.org/wikipedia/ru/thumb/1/12/Michael_Jackson_-_Bad.jpg/220px-Michael_Jackson_-_Bad.jpg',
    lenght: '4:17',
    genre: 'Funk, dance pop',
    price: '1.07€'
  },
  {
    key: '2',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller',
    release: '02/01/1983',
    cover: 'https://statics.loff.it/wp-content/uploads/2011/10/220px-Michaeljacksonthrilleralbum.jpg',
    lenght: '4:54',
    genre: 'Post-disco, rhythm and blues, funk, dance-pop',
    price: '0.89€'
  }
];

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Artist',
    dataIndex: 'artist',
    key: 'artist'
  },
  {
    title: 'Album title',
    dataIndex: 'album',
    key: 'album'
  },
  {
    title: 'Release date',
    dataIndex: 'release',
    key: 'release'
  },
  {
    title: 'Cover',
    dataIndex: 'cover',
    key: 'cover',
    render: (text, record) => (
      <img alt={record.title} src={text} style={{width: 60}}/>
    ),
  },
  {
    title: 'Lenght',
    dataIndex: 'lenght',
    key: 'lenght'
  },
  {
    title: 'Genre',
    dataIndex: 'genre',
    key: 'genre'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  }
];

const SearchTable = () => {
    return (
      <div className="SearchTable">
        <Table
          dataSource={dataSourceMock}
          columns={columns}
          onRow={(record) => {
            return {
              onClick: () => { console.log(record); },       // click row
              };
            }}
        />
      </div>
    );
};

export default SearchTable;
