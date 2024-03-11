import { PayloadAction } from "@reduxjs/toolkit"
import { Curriculum } from "../../models/Curriculum"
import { readCurriculums } from "../actions/curriculumActions"
import { StoreInitialState } from "../../models/StoreInitialState"

export function curriculumReadCases(builder: any) {
    builder.addCase(readCurriculums.pending, (state: StoreInitialState) => {
        state.loading = true
    })
    builder.addCase(readCurriculums.fulfilled, (state: StoreInitialState, action: PayloadAction<Curriculum[]>) => {
        state.loading = false,
        state.data = action.payload,
        state.error = ""
    })
    builder.addCase(readCurriculums.rejected, (state: StoreInitialState, action) => {
        state.loading = false,
        state.data = [],
        state.error = action.error.message || "Something went wrong"
    })
}