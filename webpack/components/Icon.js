import React, { Component } from 'react';
import { Div } from 'glamorous';

class Icon extends Component {
	constructor(props) {
		super(props);
		this.state = { opacity: 0.7 };
	}

	mouseEnter() {
		this.setState({ opacity: 1 });
	}

	mouseLeave() {
		this.setState({ opacity: 0.7 });
	}

	render() {
		return (
			<div style={{ opacity: this.state.opacity, transition: '.2s' }}>
				<img
					src={this.props.src}
					style={this.props.style}
					onMouseEnter={() => this.mouseEnter()}
					onMouseLeave={() => this.mouseLeave()}
				/>
			</div>
		);
	}
}

export default Icon;
