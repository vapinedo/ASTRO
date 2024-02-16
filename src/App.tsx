import './App.css'
import AppRouting from './AppRouting'
import { BrowserRouter } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <AppRouting />
        </BrowserRouter>
    )
}
