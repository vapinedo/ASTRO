import Navbar from "./shared/components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
// import GeneratePDf from "./components/GeneratePDF";
import DatosPersonales from "./components/DatosPersonales";
import UsuarioAdmin from "./features/usuario/pages/usuario-admin/UsuarioAdmin";
import UsuarioNuevo from "./features/usuario/pages/usuario-nuevo/UsuarioNuevo";

const AppRouting = () => {
    return (
        <div>
            <Navbar />
            <div className="container py-5">
                <Routes>
                    <Route path="/" element={<DatosPersonales />} />
                    <Route path="/usuarios" element={<UsuarioAdmin />} />
                    <Route path="usuario-nuevo" element={<UsuarioNuevo />} />
                </Routes>
            </div>
        </div>
    )
};

export default AppRouting;