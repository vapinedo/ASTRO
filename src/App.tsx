import './App.css'
import React from 'react';
import AppRouting from './AppRouting'
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import "./firebaseConfig"; // needed to proper initialice all firebase services

export default function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <BrowserRouter>
                <AppRouting />
            </BrowserRouter>
        </React.Fragment>
    )
}
