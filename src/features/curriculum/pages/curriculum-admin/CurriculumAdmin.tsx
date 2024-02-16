import "./CurriculumAdmin.css"
import { useEffect } from "react";
import { Link } from "react-router-dom"
import Box from "../../../../shared/containers/Box/Box"
import { useAppDispatch, useAppSelector } from "../../../../core/hooks"
import { fetchCurriculums } from "../../../../core/slices/curriculumSlice";

export default function CurriculumAdmin() {

  const dispatch = useAppDispatch();
  const curriculums = useAppSelector((state) => state.curriculum);

  useEffect(() => {
    dispatch(fetchCurriculums());
  }, []);

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
              <th scope="col">Número identidad</th>
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
                  <td>{curriculum.datosPersonales.numeroIdentificacion}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Box>
    </>
  )
}
