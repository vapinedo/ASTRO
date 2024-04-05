import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/navbar/Navbar";
import MatchAllRoutes from "./shared/components/match-all-routes/MatchAllRoutes";
import { CurriculumAdminPage } from "./features/curriculum/pages";
// import { CurriculumNuevoPage } from "./features/curriculum/pages";
// import { CurriculumEditarPage } from "./features/curriculum/pages";
// import { CurriculumPreviewPage } from "./features/curriculum/pages";

export default function AppRouting() {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 10, marginBottom: 5 }} maxWidth="xl">
        <Routes>
          <Route path="/" element={<CurriculumAdminPage />} />
          <Route path="/curriculums" element={<CurriculumAdminPage />} />
          {/* <Route path="/curriculum-nuevo" element={<CurriculumNuevoPage />} />
          <Route path="/curriculum-editar" element={<CurriculumEditarPage />} /> */}
          {/* <Route
            path="/curriculum-preview"
            element={<CurriculumPreviewPage />}
          /> */}
          <Route path="*" element={<MatchAllRoutes />} />
        </Routes>
      </Container>
    </>
  );
}
