import Navbar from "./shared/components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
// import GeneratePDf from "./components/GeneratePDF";
import DatosPersonales from "./components/DatosPersonales";
import UsuariosAdmin from "./features/Usuarios/pages/usuarios-admin/UsuariosAdmin";

const AppRouting = () => {
    return (
        <div>
            <Navbar />
            <div className="container py-5">
                <Routes>
                    <Route path="/" element={<DatosPersonales />} />
                    <Route path="/usuarios" element={<UsuariosAdmin />} />
                </Routes>
            </div>
        </div>
    )
};

export default AppRouting;