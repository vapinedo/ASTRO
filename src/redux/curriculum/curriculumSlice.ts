import { createSlice } from "@reduxjs/toolkit";
import { Curriculum } from "@models/Curriculum";
import { readCase } from "@redux/curriculum/cases/readCase";
import { createCase } from "@redux/curriculum/cases/createCase";
import { updateCase } from "@redux/curriculum/cases/updateCase";
import { deleteCase } from "@redux/curriculum/cases/deleteCase";

type StoreInitialState = {
  loading: boolean;
  curriculums: Curriculum[];
  error: string;
};

const initialState: StoreInitialState = {
  loading: false,
  curriculums: [],
  error: "",
};

const curriculumSlice = createSlice({
  name: "curriculum",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    readCase(builder),
      createCase(builder),
      updateCase(builder),
      deleteCase(builder);
  },
});

export default curriculumSlice;
