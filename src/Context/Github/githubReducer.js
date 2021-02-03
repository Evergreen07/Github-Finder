import {
    SEARCH_USERS, 
    GET_REPOS, 
    GET_USER,
    CLEAR_USERS, 
    SET_LOADING,
    DEFAULT_DISPLAY
} from '../types';

const exReducer = (state, action) => {
    switch(action.type) {
        case DEFAULT_DISPLAY:
            return{
                ...state,
                users_ : action.payload,
                loading_ : false,
                default_ : false
            }

        case SEARCH_USERS:
            return{
                ...state,
                users_ : action.payload,
                loading_ : false,
                default_ : true
            }

        case GET_USER:
                return{
                    ...state,
                    a_user : action.payload,
                    loading_ : false,
                }
        
        case GET_REPOS:
                return{
                    ...state,
                    repo_ : action.payload,
                    loading_ : false,
                }     
            
        case CLEAR_USERS : 
            return{
                ...state,
                users_:[],
                loading_:false,
                default_:false
            }

        case SET_LOADING:
            return{
                ...state,
                loading_ : true
            }

        default : 
            return state;
    }
}

export default exReducer;