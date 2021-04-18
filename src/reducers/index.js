import { combineReducers } from "redux";
import dataReducer from "./data";
import selectedReducer from "./selected";
import pageReducer from './pageno'
import searchReducer from "./searchReducer";

const allReducers = combineReducers({
    dataReducer : dataReducer,
    selectedReducer : selectedReducer,
    pageReducer : pageReducer,
    searchReducer : searchReducer,
});

export default allReducers;