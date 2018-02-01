import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './ShowMap.css';
import * as Actions from '../actions';

class ShowMap extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.map = null;
		this.google = window.google;
	}

	componentDidMount() {
		this.createMap(this.props.data.x, this.props.data.y, this.props.data.zoom);
	}

	componentWillReceiveProps(newProps) {
		this.setMapCenter(newProps.data.x, newProps.data.y);
	}

	createMap(x, y, zoom) {
		const map = new this.google.maps.Map(document.getElementById('map'), {  
			center: new this.google.maps.LatLng(x, y),
			mapTypeId: this.google.maps.MapTypeId.ROADMAP,  
			zoom: zoom
		});

		this.map = map;
		this.map.addListener('center_changed', () => {
			const newX = this.map.getCenter().toJSON().lat;
			const newY = this.map.getCenter().toJSON().lng;

			if (newX !== this.props.data.x || newY !== this.props.data.y) {
				this.props.actions.setMapLocation(
					newX, 
					newY, 
					this.props.data.zoom,
				);
			}
		});

		const waqiMapOverlay = new this.google.maps.ImageMapType({  
			getTileUrl: function(coord, zoom) {  
				return 'https://tiles.waqi.info/tiles/usepa-aqi/' + zoom + "/" + coord.x + "/" + coord.y + ".png?token=f6135feac3f546820af1a7cf74fdc79f7f935d67";  
			},  
			name: "Air Quality"
		});
		this.map.overlayMapTypes.insertAt(0,waqiMapOverlay);
	}

	setMapCenter(x, y) {
		this.map.setCenter({lat: x, lng: y});
	}

	render() {
		return (
			<div className="mapContainer">
				<div  id='map'></div>
			</div>

		);
	}
}

ShowMap.propTypes = { 
	data: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
}; 

function mapStateToProps(state) { 
	return {data: state.maps.mapLocation};
}

function mapDispatchToProps(dispatch) {
	return { 
		actions: bindActionCreators(Actions, dispatch) 
	};
}

export default connect( 
	mapStateToProps, 
	mapDispatchToProps 
)(ShowMap);
