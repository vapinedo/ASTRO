import FormikControl from '../../../../shared/components/formik/FormikControl';
import Box from '../../../../shared/containers/Box/Box';

const nivelEscolaridadBasicaOptions = [
    { key: '1', value: 'Primero' },
    { key: '2', value: 'Segundo' },
    { key: '3', value: 'Tercero' },
    { key: '4', value: 'Cuarto' },
    { key: '5', value: 'Quinto' },
    { key: '6', value: 'Sexto' },
    { key: '7', value: 'Septimo' },
    { key: '8', value: 'Octavo' },
    { key: '9', value: 'Noveno' },
    { key: '10', value: 'Décimo' },
    { key: '11', value: 'Once' }
];

export default function FormacionBasica() {
    return (
        <Box title='Formación Básica'>
            <article className='row align-items-start'>
                <div className='col'>
                    <FormikControl
                        control='select'
                        label='Nivel escolaridad'
                        name='nivelEscolaridadBasica'
                        options={nivelEscolaridadBasicaOptions}
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='input'
                        type='text'
                        label='Título obtenido'
                        name='tituloObtenidoBasica'
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='date'
                        label='Fecha de grado'
                        name='fechaGradoBasica'
                    />
                </div>
            </article>
        </Box>
    )
}
