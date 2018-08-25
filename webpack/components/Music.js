import React, { Component } from 'react';
import { css } from 'glamor';
import glamorous from 'glamorous';
import { Container, Row, Col } from 'glamorous-grid';
import ClassicalPiano from './ClassicalPiano';

const style = {
	Container: {
		marginTop: 20,
		marginBottom: 30,
	},
};

class Music extends Component {
	render() {
		return (
			<Container
				css={{
					marginTop: '10vh',
				}}
			>
				<ClassicalPiano />
			</Container>
		);
	}
}

export default Music;
