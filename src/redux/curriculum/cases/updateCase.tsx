import { updateCurriculum } from "@redux/curriculum/curriculumActionCreators";

export function updateCase(builder: any) {
  builder.addCase(updateCurriculum.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(updateCurriculum.fulfilled, (state) => {
    (state.loading = false), (state.error = "");
  });
  builder.addCase(updateCurriculum.rejected, (state, action) => {
    (state.loading = false),
      (state.curriculums = []),
      (state.error = action.error.message || "Something went wrong");
  });
}
