import { legacy_createStore } from "redux";
import {rootred} from '../src/redux/reducers/main';

const store = legacy_createStore(
    rootred
);

export default store;