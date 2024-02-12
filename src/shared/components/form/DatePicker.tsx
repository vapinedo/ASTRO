import es from 'date-fns/locale/es';
import TextError from './TextError';
import { Field, ErrorMessage } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import DateView, { registerLocale, setDefaultLocale } from 'react-datepicker';

registerLocale('es', es);

export default function DatePicker(props) {
  const { label, name, ...rest } = props;

  return (
    <div className='mb-3 row'>
      <label htmlFor={name} className='col-sm-5 col-form-label'>{label}</label>
      <div className='col-sm-7'>
        <Field name={name} className='form-control form-control-sm'>
          {({ form, field }) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <DateView
                locale="es"
                id={name}
                {...field}
                {...rest}
                selected={value}
                onChange={(val) => setFieldValue(name, val)}
              />
            );
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
