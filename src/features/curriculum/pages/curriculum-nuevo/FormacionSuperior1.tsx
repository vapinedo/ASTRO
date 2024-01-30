import FormikControl from '../../../../shared/components/formik/FormikControl';

export default function FormacionSuperior1({ modalidadAcademicaOptions, graduadoOptions }) {

    return (
        <article>
            <article className='row align-items-start'>
                <div className='col'>
                    <FormikControl
                        control='select'
                        label='Modalidad'
                        name='modalidadAcademica1'
                        options={modalidadAcademicaOptions}
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='input'
                        type='text'
                        label='Semestres aprobados'
                        name='numeroSemestresAprobados1'
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='select'
                        label='Graduado'
                        name='graduado1'
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
                        name='tituloObtenido1'
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='date'
                        label='Fecha terminación'
                        name='fechaTerminacion1'
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='input'
                        type='text'
                        label='Nro tarjeta prof.'
                        name='numeroTarjetaProfesional1'
                    />
                </div>
            </article>
        </article>
    )
}
