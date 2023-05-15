import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "../store/slices";
import  {purchaseSlice} from "../store/purchaseSlice"
import { apiSlice } from "../api/apiSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  state: modalSlice.reducer,
  purchaseState:purchaseSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["purchaseState"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
  serializableCheck: false,
});
export default store;
