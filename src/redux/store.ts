import { configureStore } from "@reduxjs/toolkit"
import { firebaseApi } from "./firebaseApi"

const store = configureStore({
    reducer: {
      [firebaseApi.reducerPath]: firebaseApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(firebaseApi.middleware),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch