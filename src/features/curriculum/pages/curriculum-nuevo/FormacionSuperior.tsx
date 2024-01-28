import FormikControl from '../../../../shared/components/formik/FormikControl';
import Box from '../../../../shared/containers/Box/Box';

const modalidadAcademicaOptions = [
    { key: 'tc', value: 'Técnica' },
    { key: 'tl', value: 'Tecnológica' },
    { key: 'te', value: 'Tecnológica Especializada' },
    { key: 'un', value: 'Universitaria' },
    { key: 'es', value: 'Especialización' },
    { key: 'mg', value: 'Master o magister' },
    { key: 'doc', value: 'Doctorado o Phd' },
];
const graduadoOptions = [
    { key: 'si', value: 'Si' },
    { key: 'no', value: 'No' },
];

export default function FormacionSuperior() {
    return (
        <Box title="Formación Superior">
            <article className='row align-items-start'>
                <div className='col'>
                    <FormikControl
                        control='select'
                        label='Modalidad'
                        name='modalidadAcademica'
                        options={modalidadAcademicaOptions}
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='input'
                        type='text'
                        label='Semestres aprobados'
                        name='numeroSemestresAprobados'
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='select'
                        label='Graduado'
                        name='graduado'
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
                        name='tituloObtenido'
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='date'
                        label='Fecha terminación'
                        name='fechaTerminacion'
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='input'
                        type='text'
                        label='Nro tarjeta prof.'
                        name='numeroTarjetaProfesional'
                    />
                </div>
            </article>
        </Box>
    )
}
