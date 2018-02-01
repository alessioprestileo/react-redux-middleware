import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { blue500, blue700 } from 'material-ui/styles/colors';

import './App.css';
import * as Actions from '../actions';
import ShowMap from '../components/ShowMap';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mapLocationFromStore: {...this.props.data.maps.mapLocation},
			mapLocation: {...this.props.data.maps.mapLocation}
		};

		this.onLatitudeChange = (event, newValue) => {
			this.setState((prevState, props) => {
				return {
					mapLocation: {...prevState.mapLocation, x: Number(newValue)}
				};
			});
		}

		this.onLongitudeChange = (event, newValue) => {
			this.setState((prevState, props) => {
				return {
					mapLocation: {...prevState.mapLocation, y: Number(newValue)}
				};
			});
		}

		this.onSubmit = (event) => {
			this.props.actions.setMapLocation(
				this.state.mapLocation.x, 
				this.state.mapLocation.y, 
				this.state.mapLocation.zoom,
			);
		}
	}

	componentWillReceiveProps(newPropsFromStore) {
		this.setState((prevState, props) => {
			return {
				mapLocation: {...newPropsFromStore.data.maps.mapLocation}
			};
		});
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<header className="App-header">
						<h1 className="App-title">Breathe!</h1>
					</header>
					<h2>Input a location to find out the air quality.</h2>
					<TextField
						className="textField"
						hintText="Example: 45.00"
						floatingLabelText="Latitude:"
						type="number"
						value={this.state.mapLocation.x}
						onChange={this.onLatitudeChange}
					/>
					<TextField
						className="textField"
						hintText="Example: 10.00"
						floatingLabelText="Longitude:"
						type="number"
						value={this.state.mapLocation.y}
						onChange={this.onLongitudeChange}
					/>
					<IconButton 
						tooltip="Submit"
						onClick={this.onSubmit}
					>
						<FontIcon 
							className="material-icons toys"
							color={blue700}
							hoverColor={blue500}
						>
							toys
						</FontIcon>
				    </IconButton>
					<ShowMap></ShowMap>
				</div>
			</MuiThemeProvider>
		); 
	}
}

App.propTypes = { 
	data: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired 
}; 

function mapStateToProps(state) { 
	return {
		data: state
	};
} 

function mapDispatchToProps(dispatch) {
	return { 
		actions: bindActionCreators(Actions, dispatch) 
	};
} 

export default connect( 
	mapStateToProps, 
	mapDispatchToProps 
)(App);