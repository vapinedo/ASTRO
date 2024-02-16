import { Curriculum } from "../../models/Curriculum";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
    loading: boolean,
    curriculums: Curriculum[],
    error: string
};

const initialState: InitialState = {
    loading: false,
    curriculums: [],
    error: "",
};

async function getCurriculums() {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "curriculums"));
    const temporaryArr: any[] = [];
    querySnapshot.forEach((doc) => {
        temporaryArr.push(doc.data());
    });
    return temporaryArr;
};

// Generates pending, fulfilled and rejected actions types
export const fetchCurriculums = createAsyncThunk("curriculum/fetchCurriculums", function() {
    return getCurriculums();
})

const curriculumSlice = createSlice({
    name: "curriculum",
    initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder.addCase(fetchCurriculums.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCurriculums.fulfilled, (state, action: PayloadAction<Curriculum[]>) => {
            state.loading = false,
            state.curriculums = action.payload,
            state.error = ""
        })
        builder.addCase(fetchCurriculums.rejected, (state, action) => {
            state.loading = false,
            state.curriculums = [],
            state.error = action.error.message || "Something went wrong"
        })
    },
})

export default curriculumSlice.reducer