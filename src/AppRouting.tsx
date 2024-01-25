import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneratePDf from "./components/GeneratePDF";

const AppRouting = () => {
    return (
        <div>
            <div className="container py-5">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<GeneratePDf />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
};

export default AppRouting;