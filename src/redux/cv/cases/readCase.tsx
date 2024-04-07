import { CV } from "@models/CV";
import { PayloadAction } from "@reduxjs/toolkit";
import { readCV } from "@redux/cv/cvActionCreators";

export function readCase(builder: any) {
  builder.addCase(readCV.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(readCV.fulfilled, (state, action: PayloadAction<CV[]>) => {
    (state.loading = false),
      (state.cvList = action.payload),
      (state.error = "");
  });
  builder.addCase(readCV.rejected, (state, action) => {
    (state.loading = false),
      (state.cvList = []),
      (state.error = action.error.message || "Something went wrong");
  });
}
