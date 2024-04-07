import { CV } from "@models/CV";
import { createSlice } from "@reduxjs/toolkit";
import { readCase } from "@redux/cv/cases/readCase";
import { createCase } from "@redux/cv/cases/createCase";
import { updateCase } from "@redux/cv/cases/updateCase";
import { deleteCase } from "@redux/cv/cases/deleteCase";

type StoreInitialState = {
  loading: boolean;
  cvList: CV[];
  error: string;
};

const initialState: StoreInitialState = {
  loading: false,
  cvList: [],
  error: "",
};

const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    readCase(builder),
      createCase(builder),
      updateCase(builder),
      deleteCase(builder);
  },
});

export default cvSlice;
