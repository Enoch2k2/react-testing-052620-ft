import { combineReducers } from 'redux';
import pets from './petsReducer';
import owners from './ownersReducer';

export default combineReducers({
    pets,
    owners
})