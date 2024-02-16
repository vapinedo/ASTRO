import * as yup from "yup";
import "./FormComponents.css";
import { ReactNode } from "react";
import { useFieldArray } from "react-hook-form";
import Box from "../../../shared/containers/Box/Box";
import Input from "../../../shared/components/form/Input";
import Select from "../../../shared/components/form/Select";
import { ExperienciaLaboral } from "../../../models/CurriculumNuevoInterface";
import CustomDatePicker from "../../../shared/components/form/CustomDatePicker";

const paisOptions = [
    { key: "Colombia", value: "Colombia" },
    { key: "Venezuela", value: "Venezuela" },
];
const departamentoOptions = [
    { key: "La Guajira", value: "La Guajira" },
    { key: "Atlantico", value: "Atlantico" },
];
const municipioOptions = [
    { key: "Uribia", value: "Uribia" },
    { key: "Manure", value: "Manaure" },
    { key: "Soledad", value: "Soledad" },
];
const tipoEmpresaOptions = [
    { key: "publica", value: "Pública" },
    { key: "privada", value: "Privada" },
];

interface InputProps {
    errors: any;
    control: any;
    setValue: any;
    register: any;
}

const MAXIMUM_INSTANCES = 4;

export const experienciaLaboralDefaultValues: ExperienciaLaboral = {
    empresa: "",
    tipoEmpresa: "",
    pais: "",
    departamento: "",
    municipio: "",
    email: "",
    telefono: "",
    fechaIngreso: new Date(),
    fechaRetiro: new Date(),
    cargo: "",
    dependencia: "",
    direccion: "",
};

export const experienciaLaboralSchema = yup.object().shape({
    empresa: yup
        .string()
        .required("Empresa es requerido"),
    tipoEmpresa: yup
        .string()
        .required("Tipo empresa es requerido"),
    pais: yup
        .string()
        .required("País es requerido"),
    departamento: yup
        .string()
        .required("Departamento es requerido"),
    municipio: yup
        .string()
        .required("Municipio es requerido"),
    email: yup
        .string()
        .required("Email es requerido"),
    telefono: yup
        .string()
        .required("Teléfono es requerido"),
    fechaIngreso: yup
        .date()
        .required("Fecha ingreso es requerido"),
    fechaRetiro: yup
        .date()
        .required("Fecha retiro es requerido"),
    cargo: yup
        .string()
        .required("Cargo es requerido"),
    dependencia: yup
        .string()
        .required("Dependencia es requerido"),
    direccion: yup
        .string()
        .required("Dirección es requerido"),
});

export default function experienciaLaboralForm(props: InputProps): ReactNode {

    const { errors, control, setValue, register } = props;

    const { fields, append, remove } = useFieldArray({
        name: "experienciaLaboral",
        control
    });

    function handleAppend(event: any) {
        event.preventDefault();

        if (fields.length === MAXIMUM_INSTANCES) return;

        append({
            empresa: "",
            tipoEmpresa: "",
            pais: "",
            departamento: "",
            municipio: "",
            email: "",
            telefono: "",
            fechaIngreso: new Date(),
            fechaRetiro: new Date(),
            cargo: "",
            dependencia: "",
            direccion: "",
        });
    }

    return (
        <Box wrapperClass="row">
            <header className="inline-flex">
                <h4 className="mb-4">Experiencia Laboral</h4>
                {(fields.length < MAXIMUM_INSTANCES) && <button onClick={handleAppend} className="btn btn-sm btn-success">Agregar</button>}
            </header>

            {fields.map((field, index) => (
                <div key={field.id} className={index > 0 ? "dynamic-fields" : ""}>
                    <div className="row">
                        <Input
                            type="text"
                            register={register}
                            wrapperClass="mb-3 col-md-3"
                            label="Empresa"
                            name={`experienciaLaboral.${index}.empresa`}
                            error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.empresa?.message}
                        />
                        <Select
                            register={register}
                            label="Tipo empresa"
                            options={tipoEmpresaOptions}
                            wrapperClass="mb-3 col-md-3"
                            name={`experienciaLaboral.${index}.tipoEmpresa`}
                            error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.tipoEmpresa?.message}
                        />
                        <Select
                            register={register}
                            label="País"
                            options={paisOptions}
                            wrapperClass="mb-3 col-md-3"
                            name={`experienciaLaboral.${index}.pais`}
                            error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.pais?.message}
                        />
                        <Select
                            register={register}
                            label="Departamento"
                            options={departamentoOptions}
                            wrapperClass="mb-3 col-md-3"
                            name={`experienciaLaboral.${index}.departamento`}
                            error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.departamento?.message}
                        />
                        <Select
                            register={register}
                            label="Municipio"
                            options={municipioOptions}
                            wrapperClass="mb-3 col-md-3"
                            name={`experienciaLaboral.${index}.municipio`}
                            error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.municipio?.message}
                        />
                        <Input
                            type="text"
                            register={register}
                            label="Email"
                            wrapperClass="mb-3 col-md-3"
                            name={`experienciaLaboral.${index}.email`}
                            error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.email?.message}
                        />
                        <Input
                            type="text"
                            register={register}
                            label="Teléfono"
                            wrapperClass="mb-3 col-md-3"
                            name={`experienciaLaboral.${index}.telefono`}
                            error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.telefono?.message}
                        />
                        <CustomDatePicker
                            control={control}
                            register={register}
                            setValue={setValue}
                            wrapperClass="mb-3 col-md-3"
                            label="Fecha ingreso"
                            name={`experienciaLaboral.${index}.fechaIngreso`}
                            error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.fechaIngreso?.message}
                        />
                        <CustomDatePicker
                            control={control}
                            register={register}
                            setValue={setValue}
                            wrapperClass="mb-3 col-md-3"
                            label="Fecha retiro"
                            name={`experienciaLaboral.${index}.fechaRetiro`}
                            error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.fechaRetiro?.message}
                        />
                        <Input
                            type="text"
                            register={register}
                            wrapperClass="mb-3 col-md-3"
                            label="Cargo"
                            name={`experienciaLaboral.${index}.cargo`}
                            error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.cargo?.message}
                        />
                        <Input
                            type="text"
                            register={register}
                            wrapperClass="mb-3 col-md-3"
                            label="Dependencia"
                            name={`experienciaLaboral.${index}.dependencia`}
                            error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.dependencia?.message}
                        />
                        <Input
                            type="text"
                            register={register}
                            wrapperClass="mb-3 col-md-3"
                            label="Dirección"
                            name={`experienciaLaboral.${index}.direccion`}
                            error={errors.experienciaLaboral && errors.experienciaLaboral[index]?.direccion?.message}
                        />
                    </div>
                    {index > 0 && <i onClick={() => remove(index)} className="icon bx bx-trash-alt" title="Eliminar"></i>}
                </div>
            ))}
        </Box>
    )
}