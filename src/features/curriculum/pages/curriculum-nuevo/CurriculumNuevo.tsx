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
    fechaGradoBasica1: '',
    modalidadAcademica1: '',
    numeroSemestresAprobados1: '',
    graduado1: '',
    tituloObtenido1: '',
    fechaTerminacion1: '',
    numeroTarjetaProfesional1: '',
    modalidadAcademica2: '',
    numeroSemestresAprobados2: '',
    graduado2: '',
    tituloObtenido2: '',
    fechaTerminacion2: '',
    numeroTarjetaProfesional2: '',
    modalidadAcademica3: '',
    numeroSemestresAprobados3: '',
    graduado3: '',
    tituloObtenido3: '',
    fechaTerminacion3: '',
    numeroTarjetaProfesional3: '',
    modalidadAcademica4: '',
    numeroSemestresAprobados4: '',
    graduado4: '',
    tituloObtenido4: '',
    fechaTerminacion4: '',
    numeroTarjetaProfesional4: '',
    modalidadAcademica5
    
    : '',
    numeroSemestresAprobados5: '',
    graduado5: '',
    tituloObtenido5: '',
    fechaTerminacion5: '',
    numeroTarjetaProfesional5: '',
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
        modalidadAcademica1: values.modalidadAcademica1,
        numeroSemestresAprobados1: values.numeroSemestresAprobados1,
        graduado1: values.graduado1,
        tituloObtenido1: values.tituloObtenido1,
        fechaTerminacion1: values.fechaTerminacion1,
        numeroTarjetaProfesional1: values.numeroTarjetaProfesional1,
        modalidadAcademica2: values.modalidadAcademica2,
        numeroSemestresAprobados2: values.numeroSemestresAprobados2,
        graduado2: values.graduado2,
        tituloObtenido2: values.tituloObtenido2,
        fechaTerminacion2: values.fechaTerminacion2,
        numeroTarjetaProfesional2: values.numeroTarjetaProfesional2,
      });
    };
    // saveDataToFirestore(); 
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
