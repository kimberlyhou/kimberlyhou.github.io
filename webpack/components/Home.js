import React, { Component } from 'react';
import Hello from './Hello';
import Cherries from './Cherries';
import { css } from 'glamor';
import glamorous from 'glamorous';
import { Container, Row, Col } from 'glamorous-grid';
import SocialMediaIcons from './SocialMediaIcons';

class Home extends Component {
	render() {
		return (
			<Container
				css={{
					marginTop: '10vh',
				}}
			>
				<Row justifyContent="around">
					<Col span={{ lg: 7 / 12 }}>
						<Hello />
					</Col>
					<Col span={{ lg: 3 / 12 }}>
						<Cherries />
					</Col>
				</Row>
				<Row justifyContent="around">
					<Col span={{ lg: 7 / 12 }}>
						<SocialMediaIcons />
					</Col>
					<Col span={{ lg: 3 / 12 }} />
				</Row>
			</Container>
		);
	}
}

export default Home;
