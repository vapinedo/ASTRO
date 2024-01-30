import React from 'react';
import { useState } from 'react';
import FormacionSuperior1 from './FormacionSuperior1';
import FormacionSuperior2 from './FormacionSuperior2';
import FormacionSuperior3 from './FormacionSuperior3';
import FormacionSuperior4 from './FormacionSuperior4';
import FormacionSuperior5 from './FormacionSuperior5';
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

const initialState = {
    formacion1: true,
    formacion2: false,
    formacion3: false,
    formacion4: false,
    formacion5: false,
    showAddButton: true,
};

export default function FormacionSuperior() {

    const [formacionState, setFormacionState] = useState(initialState);

    function handleAdd(event) {
        event?.preventDefault();
        const formaciones = {...formacionState};
        if (formaciones.formacion2 === false) { formaciones.formacion2 = true } 
        else if (formaciones.formacion3 === false) { formaciones.formacion3 = true } 
        else if (formaciones.formacion4 === false) { formaciones.formacion4 = true } 
        else { 
            formaciones.formacion5 = true;
            formaciones.showAddButton = false;
        } 
        setFormacionState(formaciones);
    }
    
    function handleDelete(formacion) {
        const formaciones = {...formacionState};
        formaciones[formacion] = false;
        formaciones.showAddButton = true;
        setFormacionState(formaciones);

    }

    return (
        <Box>
            <header className='section-header'>
                <h4>Formación Superior</h4>
                <div className='section-toolbar'>
                    {formacionState.showAddButton && <button onClick={handleAdd} className='btn btn-sm btn-success btn-plus-icon'>
                        <i className='bx bx-plus-circle'></i>
                        <span>Agregar</span>
                    </button>}
                </div>
            </header>

            {formacionState.formacion1 && <FormacionSuperior1
                graduadoOptions={graduadoOptions} 
                modalidadAcademicaOptions={modalidadAcademicaOptions} 
            />}

            {formacionState.formacion2 && <FormacionSuperior2
                handleDelete={handleDelete}
                graduadoOptions={graduadoOptions} 
                modalidadAcademicaOptions={modalidadAcademicaOptions} 
            />}

            {formacionState.formacion3 && <FormacionSuperior3 
                handleDelete={handleDelete}
                graduadoOptions={graduadoOptions} 
                modalidadAcademicaOptions={modalidadAcademicaOptions} 
            />}

            {formacionState.formacion4 && <FormacionSuperior4 
                handleDelete={handleDelete}
                graduadoOptions={graduadoOptions} 
                modalidadAcademicaOptions={modalidadAcademicaOptions} 
            />}

            {formacionState.formacion5 && <FormacionSuperior5 
                handleDelete={handleDelete}
                graduadoOptions={graduadoOptions} 
                modalidadAcademicaOptions={modalidadAcademicaOptions} 
            />}
        </Box>
    )
}
