import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/navbar/Navbar";
import CurriculumAdmin from "./features/curriculum/pages/curriculum-admin/CurriculumAdmin";
import CurriculumNuevo from "./features/curriculum/pages/curriculum-nuevo/CurriculumNuevo";

export default function AppRouting() {
    return (
        <>
            <Navbar />
            <Container sx={{ marginTop: 10 }} maxWidth="xl">
                <Routes>
                    <Route path="/" element={<CurriculumAdmin />} />
                    <Route path="/curriculums" element={<CurriculumAdmin />} />
                    <Route path="/curriculum-nuevo" element={<CurriculumNuevo />} />
                </Routes>
            </Container>
        </>
    )
}