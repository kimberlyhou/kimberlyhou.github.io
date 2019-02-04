import React, { Component } from 'react';
import glamorous, { Div, P, A } from 'glamorous';
import Radium from 'radium';

const Paragraph = glamorous.p({
	fontSize: 19,
	lineHeight: 'normal',
});

// :hover style seems to be picked up only with a Radium wrapper instead of a glamorous custom style
const Hyperlink = Radium(A);

const style = {
	Hyperlink: {
		display: 'inline-block',
		textDecoration: 'none',
		color: '#EA0150',
		transition: '.2s',
		':hover': { color: '#9D0030' },
		':active': { color: 'black' },
	},
};

class Hello extends Component {
	render() {
		return (
			<Div>
				<Paragraph>
					I work at{' '}
					<Hyperlink
						href="https://www.stripe.com"
						target="blank"
						style={style.Hyperlink}
					>
						Stripe
					</Hyperlink>{' '}
					and graduated from the Columbia-Juilliard exchange program,
					where I studied neuroscience, computer science, and piano.
				</Paragraph>
				<Paragraph>
					During my time in school, I founded{' '}
					<Hyperlink
						href="https://www.columbiapops.com"
						target="blank"
						style={style.Hyperlink}
					>
						Columbia Pops
					</Hyperlink>{' '}
					and helped lead{' '}
					<Hyperlink
						href="https://www.coreatcu.com"
						target="blank"
						style={style.Hyperlink}
					>
						CORE
					</Hyperlink>{' '}
					among other activities, all of which are dear to my heart.
				</Paragraph>
				<Paragraph>
					Always excited to collaborate on projects, artistic and
					otherwise. Feel free to say hello at{' '}
					<Hyperlink
						href="mailto:kimberly@kimberlyhou.com"
						target="blank"
						style={style.Hyperlink}
					>
						kimberly@kimberlyhou.com
					</Hyperlink>
					.
				</Paragraph>
			</Div>
		);
	}
}

export default Hello;
