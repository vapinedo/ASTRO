import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../../../shared/components/form/Form";
import Input from "../../../../shared/components/form/Input";

// interface for form
interface EmailInterface {
    email: string;
    password: string;
}

// validation
const schema = yup.object().shape({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .max(32, "Max password length is 32")
        .required("Password is required")
});

export default function CurriculumNuevo() {

    const form = useForm<EmailInterface>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema)
    });

    const { register, formState, handleSubmit } = form;
    const { errors } = formState;

    function onSubmit(data: EmailInterface) {
        console.log(data);
    }

    return (
        <section>
            <header className='page-header'>
                <h2>Curriculum nuevo</h2>
                <div>
                    <button className='btn btn-outline-danger'>Ir Atrás</button>
                </div>
            </header>

            <Form
                buttonLabel="Crear"
                register={register}
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
            >
                <Input
                    autoFocus
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    error={errors.email?.message}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    error={errors.password?.message}
                />
            </Form>
        </section>
    );
};