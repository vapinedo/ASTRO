import { CV } from "@models/CV";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@shared/containers/Box/Box";
import { useNavigate } from "react-router-dom";
import "@features/cv/styles/cvAdminPage.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { swalConfirm, swalSuccess } from "@helpers/SwalAlerts";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import * as cvAction from "@redux/cv/cvActionCreators";

export default function CVAdminPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cvList } = useAppSelector((state) => state.cv);

  useEffect(() => {
    dispatch(cvAction.readCV());
  }, [dispatch]);

  function handleEdit(cv: CV) {
    localStorage.setItem("cv-edit", JSON.stringify(cv));
    navigate("/cv-edit");
  }

  function handlePreview(cv: CV) {
    localStorage.setItem("cv", JSON.stringify(cv));
    navigate("/cv-preview");
  }

  async function handleDelete(cv: CV) {
    const confirmAction = await swalConfirm();
    if (confirmAction.isConfirmed) {
      dispatch(cvAction.deleteCV(cv));
      dispatch(cvAction.readCV());
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
            {cvList?.map((cv, index) => (
              <tr key={cv?.documentId}>
                <th scope="row">{index + 1}</th>
                <td>{cv.datosPersonales.nombres}</td>
                <td>{cv.datosPersonales.primerApellido}</td>
                <td>{cv.datosPersonales.segundoApellido}</td>
                <td>{cv.datosPersonales.tipoIdentificacion}</td>
                <td>
                  <ModeEditIcon
                    onClick={() => handleEdit(cv)}
                    sx={{ marginRight: 2 }}
                    titleAccess="Editar"
                  />
                  <VisibilityIcon
                    onClick={() => handlePreview(cv)}
                    titleAccess="Vista previa"
                  />
                  <DeleteOutlineIcon
                    onClick={() => handleDelete(cv)}
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
