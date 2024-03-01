import { createSlice } from "@reduxjs/toolkit"
import { StoreInitialState } from "../../models/StoreInitialState";
import { curriculumReadCases } from "../cases/curriculumReadCases";
import { curriculumCreateCases } from "../cases/curriculumCreateCases";
import { curriculumUpdateCases } from "../cases/curriculumUpdateCases";
import { curriculumDeleteCases } from "../cases/curriculumDeleteCases";

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
        curriculumUpdateCases(builder),
        curriculumDeleteCases(builder)
    },
})

export default curriculumSlice.reducer