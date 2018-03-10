import configureMockStore from 'redux-mock-store';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

const store = mockStore({
  search: {
    isLoading: false,
    dataSource: dataSourceMock,
  },
  detail: {}
});

export default store;
