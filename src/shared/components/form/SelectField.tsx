import { MenuItem } from "@mui/material";
import Select from '@mui/material/Select';
import { ReactNode, InputHTMLAttributes } from "react";
import FormHelperText from '@mui/material/FormHelperText';

interface SelectOption {
    key: string;
    value: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    options?: SelectOption[];
    value: any;
    onChange: any;
}

export default function SelectField(props: InputProps): ReactNode {
    const {
        error,
        label,
        options,
        value,
        onChange
    } = props;

    return (
        <>
            <Select
                label={label}
                value={value}
                defaultValue=""
                onChange={onChange}
            >
                {options?.map((c, i) => (
                    <MenuItem key={`c-${i}`} value={c.key}>
                        {c.value}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{error}</FormHelperText>
        </>
    );
}