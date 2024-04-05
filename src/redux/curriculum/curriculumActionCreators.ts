import { Curriculum } from "@models/Curriculum";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import {
  CREATE_CURRICULUM,
  DELETE_CURRICULUM,
  READ_CURRICULUM,
  UPDATE_CURRICULUM,
} from "@redux/curriculum/curriculumActions";

const COLLECTION_NAME = "curriculums";

export const createCurriculum = createAsyncThunk(
  CREATE_CURRICULUM,
  (curriculum: any) => {
    async function create(curriculum: any) {
      const db = getFirestore();
      const saveDataToFirestore = async () => {
        const docRef = await addDoc(
          collection(db, COLLECTION_NAME),
          curriculum
        );
      };
      saveDataToFirestore();
    }
    return create(curriculum);
  }
);

export const readCurriculums = createAsyncThunk(READ_CURRICULUM, () => {
  async function read() {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const documents: any[] = [];
    querySnapshot.forEach((doc) => {
      let document = {
        documentId: doc.id,
        ...doc.data(),
      };
      documents.push(document);
    });
    return documents;
  }
  return read();
});

export const updateCurriculum = createAsyncThunk(
  UPDATE_CURRICULUM,
  (curriculum: Curriculum) => {
    async function update(curriculum: Curriculum) {
      const db = getFirestore();
      if (curriculum.documentId) {
        const docRef = doc(db, COLLECTION_NAME, curriculum.documentId);
        const updateToFirestore = async (
          docRef: any,
          curriculum: Curriculum
        ) => {
          const document = await updateDoc(docRef, curriculum);
        };
        updateToFirestore(docRef, curriculum);
      }
      return;
    }
    return update(curriculum);
  }
);

export const deleteCurriculum = createAsyncThunk(
  DELETE_CURRICULUM,
  (curriculum: Curriculum) => {
    async function deleteFS(curriculum: Curriculum) {
      const db = getFirestore();
      if (curriculum.documentId) {
        const docRef = doc(db, COLLECTION_NAME, curriculum.documentId);
        const deleteToFirestore = async (
          docRef: DocumentReference<DocumentData, DocumentData>
        ) => {
          await deleteDoc(docRef);
        };
        deleteToFirestore(docRef);
      }
      return;
    }
    return deleteFS(curriculum);
  }
);
