import React, { Component } from 'react';
import { css } from 'glamor';
import glamorous from 'glamorous';
import { Container, Row, Col } from 'glamorous-grid';
import ClassicalPiano from './ClassicalPiano';

class Music extends Component {
	render() {
		return (
			<Container
				css={{
					marginTop: '5vh',
					marginBottom: '10vh',
				}}
			>
				<ClassicalPiano />
			</Container>
		);
	}
}

export default Music;
