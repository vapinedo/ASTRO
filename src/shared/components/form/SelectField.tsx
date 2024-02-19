import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { InputLabel, MenuItem } from "@mui/material";
import { ReactNode, InputHTMLAttributes } from "react";
import FormHelperText from '@mui/material/FormHelperText';

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

export default function SelectField(props: InputProps): ReactNode {
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
        <FormControl sx={{ m: 1, width: '100%' }}>
            <InputLabel>{label}</InputLabel>
            <Select
                {...rest}
                label={label}
                defaultValue=""
                {...register(name)}
            >
                {options?.map(option => (
                    <MenuItem key={option.key} value={option.key}>{option.value}</MenuItem>
                ))}
            </Select>
            <FormHelperText>{error}</FormHelperText>
        </FormControl>
    );
}