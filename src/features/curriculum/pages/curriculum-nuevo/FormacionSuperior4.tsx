import './FormacionSuperior.css';
import FormikControl from '../../../../shared/components/formik/FormikControl';

export default function FormacionSuperior4({ handleDelete, modalidadAcademicaOptions, graduadoOptions }) {

    return (
        <article className='formacion-item'>
            <div>
                <article className='row align-items-start'>
                    <div className='col'>
                        <FormikControl
                            control='select'
                            label='Modalidad'
                            name='modalidadAcademica4'
                            options={modalidadAcademicaOptions}
                        />
                    </div>
                    <div className='col'>
                        <FormikControl
                            control='input'
                            type='text'
                            label='Semestres aprobados'
                            name='numeroSemestresAprobados4'
                        />
                    </div>
                    <div className='col'>
                        <FormikControl
                            control='select'
                            label='Graduado'
                            name='graduado4'
                            options={graduadoOptions}
                        />
                    </div>
                </article>

                <article className='row align-items-start'>
                    <div className='col'>
                        <FormikControl
                            control='input'
                            type='text'
                            label='Título obtenido'
                            name='tituloObtenido4'
                        />
                    </div>
                    <div className='col'>
                        <FormikControl
                            control='date'
                            label='Fecha terminación'
                            name='fechaTerminacion4'
                        />
                    </div>
                    <div className='col'>
                        <FormikControl
                            control='input'
                            type='text'
                            label='Nro tarjeta prof.'
                            name='numeroTarjetaProfesional4'
                        />
                    </div>
                </article>
            </div>

            <i onClick={() => {handleDelete('formacion4')}} className='bx bx-trash-alt' title='Eliminar'></i>
        </article>
    )
}
