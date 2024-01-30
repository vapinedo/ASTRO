import './FormacionSuperior.css';
import FormikControl from '../../../../shared/components/formik/FormikControl';

export default function FormacionSuperior2({ handleDelete, modalidadAcademicaOptions, graduadoOptions }) {

    return (
        <article className='formacion-item'>
            <article className='row align-items-start'>
                <div className='col'>
                    <FormikControl
                        control='select'
                        label='Modalidad'
                        name='modalidadAcademica2'
                        options={modalidadAcademicaOptions}
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='input'
                        type='text'
                        label='Semestres aprobados'
                        name='numeroSemestresAprobados2'
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='select'
                        label='Graduado'
                        name='graduado2'
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
                        name='tituloObtenido2'
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='date'
                        label='Fecha terminación'
                        name='fechaTerminacion2'
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='input'
                        type='text'
                        label='Nro tarjeta prof.'
                        name='numeroTarjetaProfesional2'
                    />
                </div>
            </article>

            <i onClick={() => {handleDelete('formacion2')}} className='bx bx-trash-alt' title='Eliminar'></i>
        </article>
    )
}
