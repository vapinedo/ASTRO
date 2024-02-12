import { Formik, Form } from 'formik'
import FormikControl from '../../../../shared/components/form/FormikControl'

export default function UsuarioNuevo() {

  const options = [
    { key: 'Email', value: 'emailmoc' },
    { key: 'Telephone', value: 'telephonemoc' },
  ]

  const initialValues = {
    nombres: '',
    primerApellido: '',
    segundoApellido: '',
    tipoDocumentoIdentidad: '',
    numeroDocumentoIdentidad: '',
    genero: '',
    nacionalidad: '',
    pais: '',
    tipoLibretaMilitar: '',
    numeroLibretaMilitar: '',
    distritoLibretaMilitar: '',
    fechaNacimiento: '',
    paisNacimiento: '',
    departamentoNacimiento: '',
    municipioNacimiento: '',
    direccionCorrespondencia: '',
    paisCorrespondencia: '',
    departamentoCorrespondencia: '',
    municipioCorrespondencia: '',
    telefono: '',
    email: '',
  }

  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <section>
      <header className="page-header">
        <h2>Usuario nuevo</h2>

        <div>
          <button className="btn btn-outline-danger">Ir Atrás</button>
        </div>
      </header>

      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        {formik => (
          <Form>
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <FormikControl
              control='input'
              type='password'
              label='Confirm password'
              name='confirmPassword'
            />
            <FormikControl
              control='radio'
              label='Mode of contact'
              name='modeOfContact'
              options={options}
            />
            <FormikControl
              control='input'
              type='text'
              label='Phone number'
              name='phone'
            />

            <button type='submit' disabled={!formik.isValid}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </section>
  )
}
