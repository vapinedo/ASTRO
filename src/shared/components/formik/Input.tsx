import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';

export default function Input({ label, name, ...rest }) {
    return (
        <div className='mb-3 row'>
            <label htmlFor={name} className='col-sm-7 col-form-label'>{label}</label>
            <div className='col-sm-5'>
                <Field id={name} name={name} {...rest} className='form-control form-control-sm' />
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
