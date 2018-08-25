import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import { css } from 'glamor';
import glamorous, { Div } from 'glamorous';
import { Container, Row, Col } from 'glamorous-grid';
import Radium from 'radium';

// Actual NavLink from react-router-dom has a bug where on :hover style does not work.
const NavLink = Radium(Link);

const style = {
	NavLink: {
		display: 'inline-block',
		marginLeft: 30,
		marginBottom: 20,
		color: 'grey',
		textDecoration: 'none',
		transition: '.2s',
		':hover': { color: 'black' },
		':active': { color: 'black' },
	},
};

function Music() {
	return <Div />;
}

class App extends Component {
	render() {
		return (
			<Div fontSize={20} marginLeft={20} marginTop={20}>
				<BrowserRouter>
					<Div>
						<NavLink to="/" style={style.NavLink}>
							Kimberly Hou
						</NavLink>
						<NavLink to="/music" style={style.NavLink}>
							Music
						</NavLink>

						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/music" exact component={Music} />
						</Switch>
					</Div>
				</BrowserRouter>
			</Div>
		);
	}
}

render(<App />, document.getElementById('root'));
