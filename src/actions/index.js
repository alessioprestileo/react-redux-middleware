export const SET_NEW_MAP_ID = 'SET_NEW_MAP_ID';
export const setNewMapId = (newMapId) => {
	return {
		type: SET_NEW_MAP_ID,
		newMapId: newMapId
	}
}

export const ADD_FAVORITE_MAP = 'ADD_FAVORITE_MAP';
export const addFavoriteMap = (id, name, x, y, zoom) => {
	return {
		type: ADD_FAVORITE_MAP,
		data: {
			id: id,
			name: name,
			x: x,
			y: y,
			zoom: zoom
		}
	}
}

export const SET_MAP_LOCATION = 'SET_MAP_LOCATION';
export const setMapLocation = (x, y, zoom) => {
	return {
		type: SET_MAP_LOCATION,
		data: {
			x: x,
			y: y,
			zoom: zoom
		}
	}
}

export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION';
export const setCurrentLocation = (x, y, zoom) => {
	return {
		type: SET_CURRENT_LOCATION,
		data: {
			x: x,
			y: y,
			zoom: zoom
		}
	}
}