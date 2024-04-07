import { CV } from "@models/CV";
import * as FS from "firebase/firestore";
import * as cvActions from "@redux/cv/cvActions";
import { createAsyncThunk } from "@reduxjs/toolkit";

const COLLECTION = "curriculums";

export const createCV = createAsyncThunk(cvActions.CREATE, (cv: any) => {
  async function create(cv: any) {
    const db = FS.getFirestore();
    const saveDataToFS = async () => {
      await FS.addDoc(FS.collection(db, COLLECTION), cv);
    };
    saveDataToFS();
  }
  return create(cv);
});

export const readCV = createAsyncThunk(cvActions.READ, () => {
  async function read() {
    const db = FS.getFirestore();
    const querySnapshot = await FS.getDocs(FS.collection(db, COLLECTION));
    const documents: FS.DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      const document = {
        documentId: doc.id,
        ...doc.data(),
      };
      documents.push(document);
    });
    return documents;
  }
  return read();
});

export const updateCV = createAsyncThunk(cvActions.UPDATE, (cv: CV) => {
  async function update(cv: CV) {
    const db = FS.getFirestore();
    if (cv.documentId) {
      const docRef = FS.doc(db, COLLECTION, cv.documentId);
      const updateToFS = async (docRef: any, cv: CV) => {
        await FS.updateDoc(docRef, cv);
      };
      updateToFS(docRef, cv);
    }
    return;
  }
  return update(cv);
});

export const deleteCV = createAsyncThunk(cvActions.DELETE, (cv: CV) => {
  async function deleteFS(cv: CV) {
    const db = FS.getFirestore();
    if (cv.documentId) {
      const docRef = FS.doc(db, COLLECTION, cv.documentId);
      const deleteToFS = async (
        docRef: FS.DocumentReference<FS.DocumentData, FS.DocumentData>
      ) => {
        await FS.deleteDoc(docRef);
      };
      deleteToFS(docRef);
    }
    return;
  }
  return deleteFS(cv);
});
