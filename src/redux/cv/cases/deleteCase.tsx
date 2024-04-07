import { deleteCV } from "@redux/cv/cvActionCreators";

export function deleteCase(builder: any) {
  builder.addCase(deleteCV.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(deleteCV.fulfilled, (state) => {
    (state.loading = false), (state.error = "");
  });
  builder.addCase(deleteCV.rejected, (state, action) => {
    (state.loading = false),
      (state.cvList = []),
      (state.error = action.error.message || "Something went wrong");
  });
}
