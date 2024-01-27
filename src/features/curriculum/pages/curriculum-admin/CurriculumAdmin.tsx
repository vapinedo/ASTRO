import "./CurriculumAdmin.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore"

export default function CurriculumAdmin() {

    const [curriculums, setCurriculums] = useState([]);

    const getCurriculums = async () => {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "curriculums"));
        const temporaryArr = [];
        querySnapshot.forEach((doc) => {
            temporaryArr.push(doc.data());
        });
        setCurriculums(temporaryArr);
    };

    useEffect(() => {
        getCurriculums();
    }, [])
    
    return (
      <section>
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
                    curriculums?.map((curriculum, index) => (
                    <tr key={curriculum.nombres}>
                        <th scope="row">{index + 1}</th>
                        <td>{curriculum.nombres}</td>
                        <td>{curriculum.primerApellido}</td>
                        <td>{curriculum.segundoApellido}</td>
                        <td>{curriculum.tipoDocumentoIdentidad}</td>
                        <td>{curriculum.numeroDocumentoIdentidad}</td>
                    </tr>
                    ))
                }
              </tbody>
          </table>
      </section>
    )
  }
  