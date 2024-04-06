import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "@shared/components/navbar/Navbar";
import { CVAdminPage } from "@features/curriculum/pages";
// import { CVPreviewPage } from "./features/curriculum/pages";
import MatchAllRoutes from "@shared/components/match-all-routes/MatchAllRoutes";

export default function AppRouting() {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 10, marginBottom: 5 }} maxWidth="xl">
        <Routes>
          <Route path="/" element={<CVAdminPage />} />
          <Route path="/cv" element={<CVAdminPage />} />
          {/* <Route path="/cv-new" element={<CurriculumNuevoPage />} />
          <Route path="/cv-edit" element={<CurriculumEditarPage />} /> */}
          {/* <Route
            path="/cv-preview"
            element={<CVPreviewPage />}
          /> */}
          <Route path="*" element={<MatchAllRoutes />} />
        </Routes>
      </Container>
    </>
  );
}
