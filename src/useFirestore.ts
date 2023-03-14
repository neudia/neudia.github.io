import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

export type Document = {
  id: string;
  data?: EboardDoc;
};

type EboardDoc = {
  firstName: string;
  lastName: string;
  role: string;
  img: string;
};

const useFirestore = (collectionName: string) => {
  const [docs, setDocs] = useState<Document[]>([]);

  useEffect(() => {
    async function querySnapshot() {
      const snapshot = await getDocs(collection(db, collectionName));
      let documents: Document[] = [];
      snapshot.forEach((doc) => {
        documents.push({ id: doc.id, data: doc.data() as EboardDoc });
      });
      console.log(documents);

      setDocs(documents);
    }

    querySnapshot();
  }, [collection]);

  return { docs };
};

export default useFirestore;
