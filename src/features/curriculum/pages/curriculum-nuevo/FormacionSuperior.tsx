import FormikControl from "../../../../shared/components/formik/FormikControl";

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
        <section>
            <h4>Formación Superior</h4>
            <article className='row align-items-start'>
                <div className="col">
                    <FormikControl
                        control='select'
                        label='Modalidad académica'
                        name='modalidadAcademica'
                        options={modalidadAcademicaOptions}
                    />
                </div>
                <div className="col">
                    <FormikControl
                        control='input'
                        type='text'
                        label='Número semestres aprobados'
                        name='numeroSemestresAprobados'
                    />
                </div>
            </article>

            <article className='row align-items-start'>
                <div className="col">
                    <FormikControl
                        control='select'
                        label='Graduado'
                        name='graduado'
                        options={graduadoOptions}
                    />
                </div>
                <div className="col">
                    <FormikControl
                        control='input'
                        type='text'
                        label='Título obtenido'
                        name='tituloObtenido'
                    />
                </div>
            </article>

            <article className='row align-items-start'>
                <div className="col">
                    <FormikControl
                        control='date'
                        label='Fecha de terminación'
                        name='fechaTerminacion'
                    />
                </div>
                <div className="col">
                    <FormikControl
                        control='input'
                        type='text'
                        label='Número tarjeta profesional'
                        name='numeroTarjetaProfesional'
                    />
                </div>
            </article>
        </section>
    )
}
