import React, { Component } from 'react';
import glamorous, { Div, P, Img } from 'glamorous';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import Icon from './Icon';

const style = {
	Container: {
		marginTop: 20,
		marginBottom: 30,
	},
	Hyperlink: {
		display: 'inline-block',
		textDecoration: 'none',
	},
	Icon: {
		maxHeight: 25,
		marginRight: 10,
	},
};

class SocialMediaIcons extends Component {
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
			<Div style={style.Container}>
				<a
					href="https://www.youtube.com/user/KimberlyJHou/"
					target="blank"
					style={style.Hyperlink}
				>
					<Icon
						src="assets/youtube-social-icon-dark.png"
						style={style.Icon}
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/kimberlyhou/"
					target="blank"
					style={style.Hyperlink}
				>
					<Icon
						src="assets/in-Black-128px-TM.png"
						style={style.Icon}
					/>
				</a>
				<a
					href="https://github.com/kimberlyhou"
					target="blank"
					style={style.Hyperlink}
				>
					<Icon
						src="assets/GitHub-Mark-120px-plus.png"
						style={style.Icon}
					/>
				</a>
			</Div>
		);
	}
}

export default SocialMediaIcons;
