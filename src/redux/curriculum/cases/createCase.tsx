import { createCV } from "@redux/curriculum/cvActionCreators";

export function createCase(builder: any) {
  builder.addCase(createCV.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(createCV.fulfilled, (state) => {
    (state.loading = false), (state.error = "");
  });
  builder.addCase(createCV.rejected, (state, action) => {
    (state.loading = false),
      (state.curriculums = []),
      (state.error = action.error.message || "Something went wrong");
  });
}
