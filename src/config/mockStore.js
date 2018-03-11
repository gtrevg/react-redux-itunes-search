import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const dataSourceMock = [
	{
		key: 559334764,
		title: 'Smooth Criminal',
		artist: 'Michael Jackson',
		album: 'Bad',
		release: '1987-08-31T07:00:00Z',
		cover:
			'http://is2.mzstatic.com/image/thumb/Music/v4/05/c4/1c/05c41ca0-b614-a91c-e63e-2fd9a59d19e8/source/60x60bb.jpg',
		lenght: 257766,
		genre: 'Pop',
		price: '1.29 USD',
	},
	{
		key: 269573364,
		title: 'Billie Jean',
		artist: 'Michael Jackson',
		album: 'Thriller',
		release: '1982-11-30T08:00:00Z',
		cover:
			'http://is4.mzstatic.com/image/thumb/Music/v4/ec/2b/17/ec2b170d-2ecb-50af-02eb-39f0decc2847/source/60x60bb.jpg',
		lenght: 294188,
		genre: 'Pop',
		price: '1.29 USD',
	},
	{
		key: 159294478,
		title: 'Man In the Mirror',
		artist: 'Michael Jackson',
		album: 'The Essential Michael Jackson',
		release: '1987-08-31T07:00:00Z',
		cover:
			'http://is2.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/60x60bb.jpg',
		lenght: 320905,
		genre: 'Pop',
		price: '1.29 USD',
	},
];

const trackMock = {
	key: 159293848,
	title: 'Billie Jean',
	artist: 'Michael Jackson',
	cover:
		'http://is2.mzstatic.com/image/thumb/Music127/v4/8a/65/be/8a65bef2-f23d-e43d-9124-f5e4293513f7/source/100x100bb.jpg',
	preview:
		'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/c6/50/11/c6501132-e865-3711-175a-ddb79114e42f/mzaf_3806132797788612279.plus.aac.p.m4a',
};

const store = mockStore({
	search: {
		isLoading: false,
		dataSource: dataSourceMock,
	},
	detail: {
		isLoading: false,
		track: trackMock,
	},
});

export default store;
