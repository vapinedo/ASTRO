import { createCurriculum } from "@redux/curriculum/curriculumActionCreators";

export function createCase(builder: any) {
  builder.addCase(createCurriculum.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(createCurriculum.fulfilled, (state) => {
    (state.loading = false), (state.error = "");
  });
  builder.addCase(createCurriculum.rejected, (state, action) => {
    (state.loading = false),
      (state.curriculums = []),
      (state.error = action.error.message || "Something went wrong");
  });
}
