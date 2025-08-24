// import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

// root-reducer

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
    Boolean
);

// const composeEnhancer =
//     (process.env.NODE_ENV !== "production" &&
//         window &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//     compose;

// const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        // redux-thunk, non-serializable values, immutability checks
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }).concat(middleWares);
    },
    devTools: process.env.NODE_ENV !== "production" && {
        trace: true, // Enable action stack traces
        traceAction: true, // Show action stack traces
    },
});
export const persistor = persistStore(store);
