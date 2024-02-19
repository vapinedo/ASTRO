import { TextField } from "@mui/material";
import { ReactNode, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    register?: any;
    label?: string;
    error?: string;
    className?: string;
    wrapperClass?: string;
}

export default function InputField(props: InputProps): ReactNode {
    const {
        name,
        error,
        label,
        register,
        wrapperClass,
        ...rest
    } = props;

    return (
        <article className={wrapperClass}>
            <TextField
                {...rest}
                label={label}
                helperText={error}
                {...register(name)}
                sx={{ width: '100%' }}
            />
        </article>
    );
}
