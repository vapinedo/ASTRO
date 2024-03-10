import "./CurriculumAdmin.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Box from "../../../../shared/containers/Box/Box";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Curriculum } from "../../../../models/Curriculum";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { swalConfirm, swalSuccess } from "../../../../helpers/SwalAlerts";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useAppDispatch, useAppSelector } from "../../../../core/hooks";
import {
  deleteCurriculum,
  readCurriculums,
} from "../../../../core/actions/curriculumActions";

export default function CurriculumAdmin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const curriculums = useAppSelector((state) => state.curriculum);

  useEffect(() => {
    dispatch(readCurriculums());
  }, [dispatch]);

  function handleEdit(curriculum: Curriculum) {
    localStorage.setItem("curriculum-edit", JSON.stringify(curriculum));
    navigate("/curriculum-editar");
  }

  function handlePreview(curriculum: Curriculum) {
    localStorage.setItem("curriculum", JSON.stringify(curriculum));
    navigate("/curriculum-preview");
  }

  async function handleDelete(curriculum: Curriculum) {
    const result = await swalConfirm();
    if (result.isConfirmed) {
      dispatch(deleteCurriculum(curriculum));
      dispatch(readCurriculums());
      swalSuccess("Curriculum eliminado exitosamente!");
    }
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
            {curriculums?.curriculums.map((curriculum, index) => (
              <tr key={curriculum?.documentId}>
                <th scope="row">{index + 1}</th>
                <td>{curriculum.datosPersonales.nombres}</td>
                <td>{curriculum.datosPersonales.primerApellido}</td>
                <td>{curriculum.datosPersonales.segundoApellido}</td>
                <td>{curriculum.datosPersonales.tipoIdentificacion}</td>
                <td>
                  <ModeEditIcon
                    onClick={() => handleEdit(curriculum)}
                    sx={{ marginRight: 2 }}
                    titleAccess="Editar"
                  />
                  <VisibilityIcon
                    onClick={() => handlePreview(curriculum)}
                    titleAccess="Vista previa"
                  />
                  <DeleteOutlineIcon
                    onClick={() => handleDelete(curriculum)}
                    titleAccess="Eliminar"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </>
  );
}
