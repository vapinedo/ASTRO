import "./index.css"
import "dayjs/locale/es"
import React from "react"
import App from "./App.tsx"
import store from "./core/store.ts"
import { Provider } from "react-redux"
import ReactDOM from "react-dom/client"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        <App />
      </LocalizationProvider>
    </Provider>
  // </React.StrictMode>,
)
