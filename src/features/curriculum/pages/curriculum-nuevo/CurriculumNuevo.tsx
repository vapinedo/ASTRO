import Idiomas from './Idiomas';
import { Formik, Form } from 'formik'
import FormacionBasica from './FormacionBasica';
import DatosPersonales from './DatosPersonales';
import FormacionSuperior from './FormacionSuperior';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import '../../../../firebaseConfig'; // prevent firebase not loading error

export default function CurriculumNuevo() {

  const initialValues = {
    pais: '',
    email: '',
    genero: '',
    nombres: '',
    telefono: '',
    nacionalidad: '',
    paisNacimiento: '',
    primerApellido: '',
    fechaNacimiento: '',
    segundoApellido: '',
    tipoLibretaMilitar: '',
    paisCorrespondencia: '',
    municipioNacimiento: '',
    numeroLibretaMilitar: '',
    tipoDocumentoIdentidad: '',
    departamentoNacimiento: '',
    distritoLibretaMilitar: '',
    numeroDocumentoIdentidad: '',
    municipioCorrespondencia: '',
    direccionCorrespondencia: '',
    departamentoCorrespondencia: '',
    nivelEscolaridadBasica: '',
    tituloObtenidoBasica: '',
    fechaGradoBasica: '',
    modalidadAcademica: '',
    numeroSemestresAprobados: '',
    graduado: '',
    tituloObtenido: '',
    fechaTerminacion: '',
    numeroTarjetaProfesional: '',
  }

  const onSubmit = values => {
    const db = getFirestore();
    console.log(values);

    const saveDataToFirestore = async () => {
      const docRef = await addDoc(collection(db, "curriculums"), {
        pais: values.pais,
        email: values.email,
        genero: values.genero,
        nombres: values.nombres,
        telefono: values.telefono,
        nacionalidad: values.nacionalidad,
        paisNacimiento: values.paisNacimiento,
        primerApellido: values.primerApellido,
        segundoApellido: values.segundoApellido,
        fechaNacimiento: values.fechaNacimiento,
        tipoLibretaMilitar: values.tipoLibretaMilitar,
        paisCorrespondencia: values.paisCorrespondencia,
        municipioNacimiento: values.municipioNacimiento,
        numeroLibretaMilitar: values.numeroLibretaMilitar,
        distritoLibretaMilitar: values.distritoLibretaMilitar,
        departamentoNacimiento: values.departamentoNacimiento,
        tipoDocumentoIdentidad: values.tipoDocumentoIdentidad,
        municipioCorrespondencia: values.municipioCorrespondencia,
        direccionCorrespondencia: values.direccionCorrespondencia,
        numeroDocumentoIdentidad: values.numeroDocumentoIdentidad,
        departamentoCorrespondencia: values.departamentoCorrespondencia,
        nivelEscolaridadBasica: values.nivelEscolaridadBasica,
        tituloObtenidoBasica: values.tituloObtenidoBasica,
        fechaGradoBasica: values.fechaGradoBasica,
        modalidadAcademica: values.modalidadAcademica,
        numeroSemestresAprobados: values.numeroSemestresAprobados,
        graduado: values.graduado,
        tituloObtenido: values.tituloObtenido,
        fechaTerminacion: values.fechaTerminacion,
        numeroTarjetaProfesional: values.numeroTarjetaProfesional,
      });
    };
    saveDataToFirestore(); 
  }

  return (
    <section>
      <header className='page-header'>
        <h2>Curriculum nuevo</h2>

        <div>
          <button className='btn btn-outline-danger'>Ir Atrás</button>
        </div>
      </header>

      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        {formik => (
          <Form>
            <DatosPersonales />
            <FormacionBasica />
            <FormacionSuperior />
            <Idiomas />

            <button className='btn btn-primary' type='submit'>Crear</button>
          </Form>
        )}
      </Formik>
    </section>
  )
}
