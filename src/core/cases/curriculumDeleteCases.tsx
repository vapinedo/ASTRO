import { deleteCurriculum } from "../actions/curriculumActions"

export function curriculumDeleteCases(builder: any) {
    builder.addCase(deleteCurriculum.pending, (state) => {
        state.loading = true
    })
    builder.addCase(deleteCurriculum.fulfilled, (state) => {
        state.loading = false,
        state.error = ""
    })
    builder.addCase(deleteCurriculum.rejected, (state, action) => {
        state.loading = false,
        state.curriculums = [],
        state.error = action.error.message || "Something went wrong"
    })
}