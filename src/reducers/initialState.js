let state = {
	userInfo: {
		currentLocation: {
			x: 59.956,
			y: 11.0492,
			zoom: 11
		}
	},
	maps: {
		newMapId: 1,
		mapLocation: null,
		favorites : []
	}
};

state.maps.mapLocation = state.userInfo.currentLocation;

export const initialState = state;