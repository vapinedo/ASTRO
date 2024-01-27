import Navbar from "./shared/components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
// import GeneratePDf from "./components/GeneratePDF";
import DatosPersonales from "./components/DatosPersonales";
import UsuarioAdmin from "./features/usuario/pages/usuario-admin/UsuarioAdmin";
import UsuarioNuevo from "./features/usuario/pages/usuario-nuevo/UsuarioNuevo";
import CurriculumAdmin from "./features/curriculum/pages/curriculum-admin/CurriculumAdmin";
import CurriculumNuevo from "./features/curriculum/pages/curriculum-nuevo/CurriculumNuevo";

const AppRouting = () => {
    return (
        <>
            <Navbar />
            <section className="container py-5">
                <Routes>
                    <Route path="/" element={<DatosPersonales />} />
                    <Route path="/usuarios" element={<UsuarioAdmin />} />
                    <Route path="usuario-nuevo" element={<UsuarioNuevo />} />
                    <Route path="curriculums" element={<CurriculumAdmin />} />
                    <Route path="curriculum-nuevo" element={<CurriculumNuevo />} />
                </Routes>
            </section>
        </>
    )
};

export default AppRouting;