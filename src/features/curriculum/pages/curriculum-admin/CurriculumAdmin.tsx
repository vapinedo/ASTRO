import "./CurriculumAdmin.css"
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Box from "../../../../shared/containers/Box/Box"
import { Curriculum } from "../../../../models/Curriculum";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useAppDispatch, useAppSelector } from "../../../../core/hooks"
import { fetchCurriculums } from "../../../../core/slices/curriculumSlice";

export default function CurriculumAdmin() {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const curriculums = useAppSelector((state) => state.curriculum);

  useEffect(() => {
    dispatch(fetchCurriculums());
  }, []);

  function handlePreview(curriculum: Curriculum) {
    localStorage.setItem("curriculum", JSON.stringify(curriculum));
    navigate("/curriculum-preview");
  }

  return (
    <>
      <header className="page-header">
        <h2>Curriculums</h2>

        <div>
          <Link to="/curriculum-nuevo">
            <button className="btn btn-primary mx-3">
              <span>Crear nuevo</span>
            </button>
          </Link>
          <button className="btn btn-outline-danger">Ir Atrás</button>
        </div>
      </header>

      <Box>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombres</th>
              <th scope="col">Primer Apellido</th>
              <th scope="col">Segundo Apellido</th>
              <th scope="col">Tipo de identidad</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {
              curriculums?.curriculums.map((curriculum, index) => (
                <tr key={curriculum.datosPersonales.numeroIdentificacion}>
                  <th scope="row">{index + 1}</th>
                  <td>{curriculum.datosPersonales.nombres}</td>
                  <td>{curriculum.datosPersonales.primerApellido}</td>
                  <td>{curriculum.datosPersonales.segundoApellido}</td>
                  <td>{curriculum.datosPersonales.tipoIdentificacion}</td>
                  <td><VisibilityIcon onClick={() => handlePreview(curriculum)} /></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Box>
    </>
  )
}
