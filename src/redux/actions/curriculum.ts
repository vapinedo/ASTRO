import { collection, getDocs, getFirestore } from "firebase/firestore"

export async function getCurriculums() {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "curriculums"));
    const documents: any[] = [];
    querySnapshot.forEach((doc) => {
        const document = {
            documentId: doc.id,
            ...doc.data()
        }
        documents.push(document);
    });
    return documents;
  }