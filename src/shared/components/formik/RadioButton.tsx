import React from 'react';
import TextError from './TextError';
import { Field, ErrorMessage } from 'formik';

export default function RadioButton(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div className='mb-3'>
      <label className='form-label'>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <div className='form-check'>
                  <input
                    type='radio'
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                    className='form-check-input'
                  />
                  <label htmlFor={option.value} className='form-check-label'>{option.key}</label>
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
