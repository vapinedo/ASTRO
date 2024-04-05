import { PayloadAction } from "@reduxjs/toolkit";
import { Curriculum } from "@models/Curriculum";
import { readCurriculums } from "@redux/curriculum/curriculumActionCreators";

export function readCase(builder: any) {
  builder.addCase(readCurriculums.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(
    readCurriculums.fulfilled,
    (state, action: PayloadAction<Curriculum[]>) => {
      (state.loading = false),
        (state.curriculums = action.payload),
        (state.error = "");
    }
  );
  builder.addCase(readCurriculums.rejected, (state, action) => {
    (state.loading = false),
      (state.curriculums = []),
      (state.error = action.error.message || "Something went wrong");
  });
}
