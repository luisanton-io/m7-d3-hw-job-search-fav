import { ADD_TO_FAV, REMOVE_FROM_FAV, SET_TOAST_MESSAGE, RESET_TOAST_MESSAGE } from "../actions"

const initialState = {
    favourites: [],
    toast: {
        message: ""
    }
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TO_FAV:
            return {
                ...state,
                favourites: [...state.favourites.filter(f => f.id !== action.payload.id), action.payload]
            }
        case REMOVE_FROM_FAV:
            return {
                ...state,
                favourites: state.favourites.filter(f => f.id !== action.payload.id)
            }
        case SET_TOAST_MESSAGE:
            return {
                ...state,
                toast: {
                    message: action.payload
                }
            }
        case RESET_TOAST_MESSAGE:
            return {
                ...state,
                toast: {
                    message: ""
                }
            }
        default: return state
    }

}