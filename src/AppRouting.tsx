import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/navbar/Navbar";
import MatchAllRoutes from "./shared/components/match-all-routes/MatchAllRoutes";
import { CurriculumAdmin } from "./features/curriculum/pages";
import { CurriculumNuevo } from "./features/curriculum/pages";
import { CurriculumEditar } from "./features/curriculum/pages";
import { CurriculumPreview } from "./features/curriculum/pages";

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
                    <Route path="*" element={<MatchAllRoutes />} />
                </Routes>
            </Container>
        </>
    )
}