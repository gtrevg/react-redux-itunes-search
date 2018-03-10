import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

import './SearchTable.css';

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

class SearchTable extends PureComponent {
  render() {
    const { isLoading, dataSource } = this.props;
    return (
      <div className="SearchTable">
        <Table
          loading={isLoading}
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 5 }}
          onRow={(record) => {
            return {
              onClick: () => { console.log(record); },       // click row
              };
            }}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ...state.search
  }
}

export default connect(mapStateToProps)(SearchTable);
