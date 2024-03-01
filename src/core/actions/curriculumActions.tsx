import { createAsyncThunk } from "@reduxjs/toolkit";
import { Curriculum } from "../../models/Curriculum";
import { collection, getDocs, addDoc, updateDoc, getFirestore, doc, deleteDoc } from "firebase/firestore";

const COLLECTION_NAME = "curriculums";
const CREATE = "curriculum/createCurriculums";
const READ = "curriculum/readCurriculums";
const UPDATE = "curriculum/updateCurriculums";
const DELETE = "curriculum/deleteCurriculums";

export const createCurriculum = createAsyncThunk(CREATE, (curriculum: any) => {
    async function create(curriculum: any) {
        const db = getFirestore();
        const saveDataToFirestore = async () => {
            const docRef = await addDoc(collection(db, COLLECTION_NAME), curriculum);
        };
        saveDataToFirestore();
    }
    return create(curriculum);
});

export const readCurriculums = createAsyncThunk(READ, () => {
    async function read() {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
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

export const updateCurriculum = createAsyncThunk(UPDATE, (curriculum: Curriculum) => {
    async function update(curriculum: Curriculum) {
        const db = getFirestore();
        if (curriculum.documentId) {
            const docRef = doc(db, COLLECTION_NAME, curriculum.documentId);
            const updateToFirestore = async (docRef: any, curriculum: Curriculum) => {
                const document = await updateDoc(docRef, curriculum);
            };
            updateToFirestore(docRef, curriculum);
        }
        return;
    }
    return update(curriculum);
});

export const deleteCurriculum = createAsyncThunk(DELETE, (curriculum: Curriculum) => {
    async function deleteFS(curriculum: Curriculum) {
        const db = getFirestore();
        if (curriculum.documentId) {
            const docRef = doc(db, COLLECTION_NAME, curriculum.documentId);
            const deleteToFirestore = async (docRef: any) => {
                const document = await deleteDoc(docRef);
                console.log({document});
            };
            deleteToFirestore(docRef);
        }
        return;
    }
    return deleteFS(curriculum);
});
