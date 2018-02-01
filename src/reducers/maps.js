import { initialState } from './initialState';
import { 
    ADD_FAVORITE_MAP,
    SET_MAP_LOCATION,
    SET_NEW_MAP_ID
} from '../actions';

const maps = (state = initialState.maps, action) => {
    switch (action.type) {
        case ADD_FAVORITE_MAP:
            let copyFavorites = [...state.favorites];
            copyFavorites.push(
                {
                    id: action.data.id,
                    name:action.data.name,
                    x: action.data.x,
                    y: action.data.y,
                    zoom: action.data.zoom
                }                
            );
            return {...state, favorites: copyFavorites};
        case SET_MAP_LOCATION:
            return {
                ...state, 
                mapLocation: {
                    x: action.data.x,
                    y: action.data.y,
                    zoom: action.data.zoom
                }
            };
        case SET_NEW_MAP_ID:
            return {
                ...state,
                newMapId: action.newMapId
            };
        default:
            return state;
    }
}

export default maps;