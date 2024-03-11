import "./index.css"
import "dayjs/locale/es"
import React from "react"
import App from "./App.tsx"
import ReactDOM from "react-dom/client"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ApiProvider, createApi } from "@reduxjs/toolkit/query/react";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

async function getCurriculums() {
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

const api = createApi({
  baseQuery: () => {},
  endpoints: (build) => ({
    curriculumList: build.query({
      async queryFn() {
        const data = await getCurriculums();
        if (data) {
          return { data };
        } else {
          return { error: "Something went wrong" };
        }
      },
    }),
  }),
});

export const { useCurriculumListQuery } = api;

const store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(api.middleware),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        <App />
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
)
