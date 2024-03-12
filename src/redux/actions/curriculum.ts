import { collection, getDocs, getFirestore } from "firebase/firestore";

const COLLECTION = "curriculums";

export async function read() {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, COLLECTION));
  const documents: any[] = [];
  querySnapshot.forEach((doc) => {
    const document = {
      documentId: doc.id,
      ...doc.data(),
    };
    documents.push(document);
  });
  return documents;
}
