import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc, getFirestore } from "firebase/firestore";
import { Curriculum } from "../../models/Curriculum";

const COLLECTION_NAME = "curriculums";
const READ = "curriculum/fetchCurriculums";
const CREATE = "curriculum/createCurriculums";

export const createCurriculum = createAsyncThunk(CREATE, (curriculum: any) => {
    async function create(curriculum: any) {
        const FS_DATABASE = getFirestore();
        const saveDataToFirestore = async () => {
            const docRef = await addDoc(collection(FS_DATABASE, COLLECTION_NAME), curriculum);
        };
        saveDataToFirestore();
    }
    return create(curriculum);
});

// Generates pending, fulfilled and rejected actions types
export const readCurriculums = createAsyncThunk(READ, () => {
    async function read() {
        const FS_DATABASE = getFirestore();
        const querySnapshot = await getDocs(collection(FS_DATABASE, COLLECTION_NAME));
        const documents: any[] = [];
        querySnapshot.forEach((doc) => {
            let document = {
                documentId: doc.id,
                ...doc.data()
            }
            documents.push(document);
        });
        return documents;
    }
    return read();
});

export function readCurriculumsCases(builder: any) {
    builder.addCase(readCurriculums.pending, (state) => {
        state.loading = true
    })
    builder.addCase(readCurriculums.fulfilled, (state, action: PayloadAction<Curriculum[]>) => {
        state.loading = false,
        state.curriculums = action.payload,
        state.error = ""
    })
    builder.addCase(readCurriculums.rejected, (state, action) => {
        state.loading = false,
        state.curriculums = [],
        state.error = action.error.message || "Something went wrong"
    })
}
