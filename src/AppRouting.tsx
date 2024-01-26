import Navbar from "./shared/Components/Navbar";
// import GeneratePDf from "./components/GeneratePDF";
import DatosPersonales from "./components/DatosPersonales";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouting = () => {
    return (
        <div>
            <Navbar />
            <div className="container py-5">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<DatosPersonales />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
};

export default AppRouting;