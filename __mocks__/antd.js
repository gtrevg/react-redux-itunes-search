import React, { Component } from 'react';
import { mockComponent } from '../src/utils/testUtils';

export class Table extends Component {
	render() {
		return mockComponent('Antd Table', this.props);
	}
}

class Search extends Component {
	render() {
		return mockComponent('Antd Search', this.props);
	}
}

export const Input = { Search };
