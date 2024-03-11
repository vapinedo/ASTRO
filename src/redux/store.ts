import { configureStore } from "@reduxjs/toolkit"
import { curriculum } from "./slices"

const store = configureStore({
    reducer: {
        curriculum: curriculum.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch