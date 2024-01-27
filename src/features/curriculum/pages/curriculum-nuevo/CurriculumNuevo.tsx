import { Formik, Form } from 'formik'
import '../../../../firebaseConfig'; // prevent firebase not loading error
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import FormikControl from '../../../../shared/components/formik/FormikControl'

const documentoIdentidadOptions = [
  { key: 'cc', value: 'Cedula de Ciudadanía' },
  { key: 'ce', value: 'Cedula de Extranjería' },
  { key: 'pas', value: 'Pasaporte' }
];
const generoOptions = [
  { key: 'f', value: 'Mujer' },
  { key: 'm', value: 'Hombre' }
];
const nacionalidadOptions = [
  { key: 'col', value: 'Colombiano(a)' },
  { key: 'ext', value: 'Extranjero(a)' }
];
const paisOptions = [
  { key: 'colombia', value: 'Colombia' },
  { key: 'venezuela', value: 'Venezuela' }
];
const departamentoOptions = [
  { key: 'la guajira', value: 'La Guajira' },
  { key: 'magdalena', value: 'Magdalena' }
];
const municipioOptions = [
  { key: 'uribia', value: 'Uribia' },
  { key: 'manaure', value: 'Manaure' }
];
const libretaMilitarOptions = [
  { key: 'primera', value: 'Primera Clase' },
  { key: 'segunda', value: 'Segunda Clase' }
];


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
  }

  const onSubmit = values => {
    const db = getFirestore();

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
            <h4>Datos Personales</h4>

            <article className='row align-items-start'>
              <article className='col'>
                <FormikControl
                  control='input'
                  type='text'
                  label='Primer apellido'
                  name='primerApellido'
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='Segundo apellido'
                  name='segundoApellido'
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='Nombres'
                  name='nombres'
                />
                <FormikControl
                  control='select'
                  label='Documento identidad'
                  name='tipoDocumentoIdentidad'
                  options={documentoIdentidadOptions}
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='Número documento identidad'
                  name='numeroDocumentoIdentidad'
                />
                <FormikControl
                  control='select'
                  label='Sexo'
                  name='genero'
                  options={generoOptions}
                />
                <FormikControl
                  control='select'
                  label='Nacionalidad'
                  name='nacionalidad'
                  options={nacionalidadOptions}
                />
                <FormikControl
                  control='select'
                  label='País'
                  name='pais'
                  options={paisOptions}
                />
                <FormikControl
                  control='select'
                  label='Tipo de libreta militar'
                  name='tipoLibretaMilitar'
                  options={libretaMilitarOptions}
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='Número libreta militar'
                  name='numeroLibretaMilitar'
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='Distrito libreta militar'
                  name='distritoLibretaMilitar'
                />
              </article>

              <article className='col'>
                <FormikControl
                  control='date'
                  label='Fecha de nacimiento'
                  name='fechaNacimiento'
                />
                <FormikControl
                  control='select'
                  label='País de nacimiento'
                  name='paisNacimiento'
                  options={paisOptions}
                />
                <FormikControl
                  control='select'
                  label='Departamento de nacimiento'
                  name='departamentoNacimiento'
                  options={departamentoOptions}
                />
                <FormikControl
                  control='select'
                  label='Municipio de nacimiento'
                  name='municipioNacimiento'
                  options={municipioOptions}
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='Dirección de correspondencia'
                  name='direccionCorrespondencia'
                />
                <FormikControl
                  control='select'
                  label='País de correspondencia'
                  name='paisCorrespondencia'
                  options={paisOptions}
                />
                <FormikControl
                  control='select'
                  label='Departamento de correspondencia'
                  name='departamentoCorrespondencia'
                  options={departamentoOptions}
                />
                <FormikControl
                  control='select'
                  label='Municipio de correspondencia'
                  name='municipioCorrespondencia'
                  options={municipioOptions}
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='Telefono'
                  name='telefono'
                />
                <FormikControl
                  control='input'
                  type='email'
                  label='Email'
                  name='email'
                />
              </article>
            </article>

            <button className='btn btn-primary' type='submit'>Crear</button>
          </Form>
        )}
      </Formik>
    </section>
  )
}
