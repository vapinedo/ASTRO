import { ReactNode, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    register?: any;
    label?: string;
    error?: string;
    className?: string;
    wrapperClass?: string;
}

export default function Input(props: InputProps): ReactNode {
    const {
        name,
        error,
        label,
        register,
        wrapperClass,
        ...rest
    } = props;

    return (
        <article className="mb-3">
            <label className="form-label">{label}</label>
            <input className="form-control" {...register(name)} {...rest} />
            <small className="text-danger">{error}</small>
        </article>
    );
}
