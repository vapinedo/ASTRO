import { createApi } from "@reduxjs/toolkit/query/react";
import { read } from "./actions/curriculum";

export const api = createApi({
    baseQuery: () => {},
    endpoints: (build) => ({
      getCurriculums: build.query({
        async queryFn() {
          const data = await read();
          if (data) {
            return { data };
          } else {
            return { error: "Something went wrong" };
          }
        },
      }),
    }),
  });
  
export const { useGetCurriculumsQuery } = api;