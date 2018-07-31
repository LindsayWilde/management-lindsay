import {
    AUTHENTICATED_USER
} from '../actions/types';


const INTIAL_STATE = {
    authenticated:false,
    user:[]
}

export default function(state = INTIAL_STATE, action) {
    switch (action.type) {
        case AUTHENTICATED_USER:
            const { user } = action.payload;
            return {
                ...state,
                user
            }
        default: return state;
    }
}
