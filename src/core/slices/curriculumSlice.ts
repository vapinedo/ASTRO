import { createSlice } from "@reduxjs/toolkit"
import { StoreInitialState } from "../../models/StoreInitialState";
import { curriculumReadCases } from "../cases/curriculumReadCases";
import { curriculumCreateCases } from "../cases/curriculumCreateCases";
import { curriculumUpdateCases } from "../cases/curriculumUpdateCases";

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
        curriculumReadCases(builder),
        curriculumCreateCases(builder),
        curriculumUpdateCases(builder)
    },
})

export default curriculumSlice.reducer