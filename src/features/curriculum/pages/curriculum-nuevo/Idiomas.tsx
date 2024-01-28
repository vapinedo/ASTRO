import FormikControl from '../../../../shared/components/formik/FormikControl';
import Box from '../../../../shared/containers/Box/Box';

const idiomaOptions = [
    { key: 'r', value: 'Regular' },
    { key: 'b', value: 'Bien' },
    { key: 'mb', value: 'Muy Bien' },
];

export default function Idiomas() {
    return (
        <Box title='Idiomas'>
            <article className='row align-items-start'>
                <div className='col'>
                    <FormikControl
                        control='input'
                        type='text'
                        label='Idioma'
                        name='idioma'
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='select'
                        label='Lo Habla'
                        name='idiomaLoHable'
                        options={idiomaOptions}
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='select'
                        label='Lo lee'
                        name='idiomaLoLee'
                        options={idiomaOptions}
                    />
                </div>
                <div className='col'>
                    <FormikControl
                        control='select'
                        label='Lo Escribe'
                        name='idiomaLoEscribe'
                        options={idiomaOptions}
                    />
                </div>
            </article>
        </Box>
    )
}
