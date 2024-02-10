import { TextField } from "@mui/material";

type Props = {
    name: string;
    type: string;
    label: string;
    marginBottom?: string; // Optionally accept marginBottom prop
}

const CustomizedInput = (props: Props) => {
    const { name, type, label, marginBottom } = props;

    return (
        <TextField 
            InputLabelProps={{ style: { color: "white" } }} 
            name={name} 
            label={label} 
            type={type}
            autoComplete="current-password" 
            InputProps={{ style: { width: "400px", borderRadius: 10, fontSize: 20, color: "white", marginBottom: marginBottom || '16px' } }}
        />
    );
}

export default CustomizedInput;
