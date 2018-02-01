import { initialState } from './initialState';
import { SET_CURRENT_LOCATION } from '../actions';

const userInfo = (state = initialState.userInfo, action) => {
	switch (action.type) {
		case SET_CURRENT_LOCATION:
            return Object.assign(
            	{},
                state,
                {
                    currentLocation: {
                        x: action.data.x,
                        y: action.data.y,
                        zoom: action.data.zoom
                    }
                }
            );
		default:
			return state;
	}
}

export default userInfo;