import { CV } from "@models/CV";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@shared/containers/Box/Box";
import { useNavigate } from "react-router-dom";
import "@features/curriculum/styles/cvAdminPage.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { swalConfirm, swalSuccess } from "@helpers/SwalAlerts";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import * as curriculumAction from "@redux/curriculum/cvActionCreators";

export default function CVAdminPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const curriculums = useAppSelector((state) => state.curriculum);

  useEffect(() => {
    dispatch(curriculumAction.readCV());
  }, [dispatch]);

  function handleEdit(curriculum: CV) {
    localStorage.setItem("curriculum-edit", JSON.stringify(curriculum));
    navigate("/cv-edit");
  }

  function handlePreview(curriculum: CV) {
    localStorage.setItem("curriculum", JSON.stringify(curriculum));
    navigate("/cv-preview");
  }

  async function handleDelete(curriculum: CV) {
    const confirmAction = await swalConfirm();
    if (confirmAction.isConfirmed) {
      dispatch(curriculumAction.deleteCV(curriculum));
      dispatch(curriculumAction.readCV());
      swalSuccess("Hola de Vida eliminada exitosamente!");
    }
  }

  return (
    <>
      <header className="page-header">
        <h2>Hojas de Vida</h2>

        <div>
          <Link to="/cv-new">
            <button className="btn btn-primary mx-3">
              <span>Nueva Hoja de Vida</span>
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
