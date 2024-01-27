import { Link } from "react-router-dom"
import "./CurriculumAdmin.css"

export default function CurriculumAdmin() {
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
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  </tr>
              </thead>
  
              <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                  </tr>
  
                  <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                  </tr>
  
                  <tr>
                      <th scope="row">3</th>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                  </tr>
              </tbody>
          </table>
      </section>
    )
  }
  