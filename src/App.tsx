import './App.css'
import AppRouting from './AppRouting'
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <AppRouting />
        </BrowserRouter>
    )
}

export default App
