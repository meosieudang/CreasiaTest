// third-party
import { combineReducers } from 'redux';
// project imports
import accountReducer from './slices/account';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    account: accountReducer,
});

export default reducer;
