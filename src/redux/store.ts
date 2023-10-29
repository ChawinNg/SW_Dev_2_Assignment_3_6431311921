import { configureStore,combineReducers } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";
import {useSelector, TypedUseSelectorHook} from "react-redux"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistCongig = {
    key: "rootPersist",
    storage
}

const rootReducer = combineReducers({bookSlice})
const reduxPersistedReducer = persistReducer(persistCongig,rootReducer)

export const store = configureStore(
    {
        reducer: reduxPersistedReducer
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector