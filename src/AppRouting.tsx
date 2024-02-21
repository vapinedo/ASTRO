import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/navbar/Navbar";
import MatchAllRoute from "./components/MatchAllRoutes";
import CurriculumAdmin from "./features/curriculum/pages/curriculum-admin/CurriculumAdmin";
import CurriculumNuevo from "./features/curriculum/pages/curriculum-nuevo/CurriculumNuevo";
import CurriculumEditar from "./features/curriculum/pages/curriculum-editar/CurriculumEditar";
import CurriculumPreview from "./features/curriculum/pages/curriculum-preview/CurriculumPreview";

export default function AppRouting() {
    return (
        <>
            <Navbar />
            <Container sx={{ marginTop: 10, marginBottom: 5 }} maxWidth="xl">
                <Routes>
                    <Route path="/" element={<CurriculumAdmin />} />
                    <Route path="/curriculums" element={<CurriculumAdmin />} />
                    <Route path="/curriculum-nuevo" element={<CurriculumNuevo />} />
                    <Route path="/curriculum-editar" element={<CurriculumEditar />} />
                    <Route path="/curriculum-preview" element={<CurriculumPreview />} />
                    <Route path="*" element={<MatchAllRoute />} />
                </Routes>
            </Container>
        </>
    )
}