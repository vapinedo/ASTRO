import './FormacionSuperior.css';
import FormikControl from '../../../../shared/components/formik/FormikControl';

export default function FormacionSuperior5({ handleDelete, modalidadAcademicaOptions, graduadoOptions }) {

    return (
        <article className='formacion-item'>
            <div>
                <article className='row align-items-start'>
                    <div className='col'>
                        <FormikControl
                            control='select'
                            label='Modalidad'
                            name='modalidadAcademica5'
                            options={modalidadAcademicaOptions}
                        />
                    </div>
                    <div className='col'>
                        <FormikControl
                            control='input'
                            type='text'
                            label='Semestres aprobados'
                            name='numeroSemestresAprobados5'
                        />
                    </div>
                    <div className='col'>
                        <FormikControl
                            control='select'
                            label='Graduado'
                            name='graduado5'
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
                            name='tituloObtenido5'
                        />
                    </div>
                    <div className='col'>
                        <FormikControl
                            control='date'
                            label='Fecha terminación'
                            name='fechaTerminacion5'
                        />
                    </div>
                    <div className='col'>
                        <FormikControl
                            control='input'
                            type='text'
                            label='Nro tarjeta prof.'
                            name='numeroTarjetaProfesional5'
                        />
                    </div>
                </article>
            </div>

            <i onClick={() => {handleDelete('formacion5')}} className='bx bx-trash-alt' title='Eliminar'></i>
        </article>
    )
}
