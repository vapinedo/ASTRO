import './App.css'
import AppRouting from './AppRouting'
import { BrowserRouter } from 'react-router-dom';
import "./firebaseConfig"; // needed to proper initialice all firebase services

export default function App() {
    return (
        <BrowserRouter>
            <AppRouting />
        </BrowserRouter>
    )
}
