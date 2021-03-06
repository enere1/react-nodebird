import {HYDRATE} from 'next-redux-wrapper'
import {combineReducers} from 'redux'

const initialState = {
    user : {
        
    },
    post: {
        
    }
}

import user from './user'
import post from './post'


const rootReducer = combineReducers({
    index : (state = {} ,action) => {
        switch(action.type) {
            case HYDRATE :
                console.log("HYDRATE",HYDRATE)
                return{...state,...action.payload};
            default :
                return state
        }
    },
    user,
    post,
})

export default rootReducer