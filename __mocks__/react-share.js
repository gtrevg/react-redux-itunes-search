import { Component } from 'react';
import { mockComponent } from '../src/utils/testUtils';

export class FacebookShareButton extends Component {
	render() {
		return mockComponent('React-Share FacebookShareButton', this.props);
	}
}

export class GooglePlusShareButton extends Component {
	render() {
		return mockComponent('React-Share GooglePlusShareButton', this.props);
	}
}

export class TwitterShareButton extends Component {
	render() {
		return mockComponent('React-Share TwitterShareButton', this.props);
	}
}

export class FacebookIcon extends Component {
	render() {
		return mockComponent('React-Share FacebookIcon', this.props);
	}
}

export class GooglePlusIcon extends Component {
	render() {
		return mockComponent('React-Share GooglePlusIcon', this.props);
	}
}

export class TwitterIcon extends Component {
	render() {
		return mockComponent('React-Share TwitterIcon', this.props);
	}
}
