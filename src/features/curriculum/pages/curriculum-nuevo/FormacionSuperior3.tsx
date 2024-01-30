import './FormacionSuperior.css';
import FormikControl from '../../../../shared/components/formik/FormikControl';

export default function FormacionSuperior3({ handleDelete, modalidadAcademicaOptions, graduadoOptions }) {

    return (
        <article className='formacion-item'>
            <div>
                <article className='row align-items-start'>
                    <div className='col'>
                        <FormikControl
                            control='select'
                            label='Modalidad'
                            name='modalidadAcademica3'
                            options={modalidadAcademicaOptions}
                        />
                    </div>
                    <div className='col'>
                        <FormikControl
                            control='input'
                            type='text'
                            label='Semestres aprobados'
                            name='numeroSemestresAprobados3'
                        />
                    </div>
                    <div className='col'>
                        <FormikControl
                            control='select'
                            label='Graduado'
                            name='graduado3'
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
                            name='tituloObtenido3'
                        />
                    </div>
                    <div className='col'>
                        <FormikControl
                            control='date'
                            label='Fecha terminación'
                            name='fechaTerminacion3'
                        />
                    </div>
                    <div className='col'>
                        <FormikControl
                            control='input'
                            type='text'
                            label='Nro tarjeta prof.'
                            name='numeroTarjetaProfesional3'
                        />
                    </div>
                </article>
            </div>

            <i onClick={() => {handleDelete('formacion3')}} className='bx bx-trash-alt' title='Eliminar'></i>
        </article>
    )
}
