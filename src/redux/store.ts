import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/to-do/todoSlice";
import storage from "./storage";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
} from "redux-persist";

const persistConfig = {
	key: "root",
	storage,
};
const persistedReducer = persistReducer(persistConfig, todoReducer);

export const makeStore = () => {
	return configureStore({
		reducer: {
			todo: persistedReducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
