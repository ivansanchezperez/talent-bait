import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import companyFacilityReducer from "./productsAdsReducer";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, companyFacilityReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch();
