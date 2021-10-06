import AddDel from "../reducers/AddDel";
import {combineReducers} from "redux";


const allReducers = combineReducers({
    boxes : AddDel
})

export default allReducers;
