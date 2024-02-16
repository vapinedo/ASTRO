import { configureStore } from "@reduxjs/toolkit"
import curriculumReducer from "./slices/curriculumSlice"

const store = configureStore({
    reducer: {
        curriculum: curriculumReducer,
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch