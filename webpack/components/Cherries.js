import React, { Component } from 'react';
import { Div } from 'glamorous';

const imgSrc = hovered => {
	return hovered
		? 'assets/cherries-hover.png'
		: 'assets/cherries-default.png';
};

class Cherries extends Component {
	constructor(props) {
		super(props);
		this.state = { hovered: false };
	}

	mouseOut(cherries) {
		this.setState({ hovered: false });
	}

	mouseOver(cherries) {
		this.setState({ hovered: true });
	}

	render() {
		return (
			<React.Fragment>
				<Div css={{ marginBottom: 10 }}>
					<img
						src={imgSrc(this.state.hovered)}
						onMouseOut={() => this.mouseOut()}
						onMouseOver={() => this.mouseOver()}
					/>
				</Div>
				<Div>'Hello!' say the cherries.</Div>
			</React.Fragment>
		);
	}
}

export default Cherries;
