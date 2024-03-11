import { createApi } from "@reduxjs/toolkit/query";
import { getCurriculums } from "./actions/curriculum";

export const apiaa = createApi({
  baseQuery: () => {},
  endpoints: (build) => ({
    curriculumList: build.query({
      async queryFn() {
        const data = await getCurriculums();
        if (data) {
          return { data };
        } else {
          return { error: "Something went wrong" };
        }
      },
    }),
  }),
});

export const { useCurriculumListQuery } = api;