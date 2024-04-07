import { updateCV } from "@redux/cv/cvActionCreators";

export function updateCase(builder: any) {
  builder.addCase(updateCV.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(updateCV.fulfilled, (state) => {
    (state.loading = false), (state.error = "");
  });
  builder.addCase(updateCV.rejected, (state, action) => {
    (state.loading = false),
      (state.curriculums = []),
      (state.error = action.error.message || "Something went wrong");
  });
}
