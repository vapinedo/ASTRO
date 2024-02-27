import { createSlice } from "@reduxjs/toolkit"
import { StoreInitialState } from "../../models/StoreInitialState";
import { createCurriculum, readCurriculumsCases } from "../actions/curriculumActions";

const initialState: StoreInitialState = {
    loading: false,
    curriculums: [],
    error: "",
};

const curriculumSlice = createSlice({
    name: "curriculum",
    initialState,
    reducers: {},
    extraReducers: function (builder) {
        readCurriculumsCases(builder),
        builder.addCase(createCurriculum.pending, (state) => {
            state.loading = true
        })
        builder.addCase(createCurriculum.fulfilled, (state) => {
            state.loading = false,
            state.error = ""
        })
        builder.addCase(createCurriculum.rejected, (state, action) => {
            state.loading = false,
            state.curriculums = [],
            state.error = action.error.message || "Something went wrong"
        })
    },
})

export default curriculumSlice.reducer