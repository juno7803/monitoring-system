import {combineReducers} from "redux";
import dataReducer from './action/dataReducer';

const rootReducer = combineReducers({
    dataReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;