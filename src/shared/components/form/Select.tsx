import { ReactNode, InputHTMLAttributes } from "react";

interface SelectOption {
    key: string;
    value: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    register?: any;
    label?: string;
    error?: string;
    className?: string;
    wrapperClass?: string;
    options?: SelectOption[];
}

export default function Select(props: InputProps): ReactNode {
    const {
        name,
        error,
        label,
        options,
        register,
        wrapperClass,
        ...rest
    } = props;

    return (
        <article className={wrapperClass}>
            <label htmlFor={name} className="form-label">{label}</label>
            <select className="form-select form-select-sm" {...register(name)} {...rest}>
                {options?.map(option => (
                    <option key={option.key} value={option.key}>
                        {option.value}
                    </option>
                ))}
            </select>
            <small className="text-danger">{error}</small>
        </article>
    );
}