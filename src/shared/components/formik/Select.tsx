import TextError from './TextError';
import { Field, ErrorMessage } from 'formik'

export default function Select({ label, name, options, ...rest }) {
    return (
        <div className='mb-3 row'>
            <label htmlFor={name} className='col-sm-5 col-form-label'>{label}</label>
            <div className='col-sm-7'>
                <Field as='select' id={name} name={name} {...rest} className='form-select form-select-sm'>
                    {options.map(option => (
                        <option key={option.key} value={option.key}>
                            {option.value}
                        </option>
                    ))}
                </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
