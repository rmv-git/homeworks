import {combineReducers, createStore} from "redux";
import {themeReducer} from "./themeReducer";

const rootReducer = combineReducers({
    themeReducer,
});

export const reduxStore = createStore(rootReducer);

export type RootStateType = ReturnType<typeof reduxStore.getState>

//@ts-ignore
window.store = reduxStore;
