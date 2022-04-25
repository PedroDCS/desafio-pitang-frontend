import { Input } from "@mantine/core";
import { ErrorMessage } from "formik";

function InputFormComponent({ handleChange, handleBlur, value, name, placeholder,icon }) {
    return (<div>
        <Input
            icon={icon}
            placeholder={placeholder}
            type={name}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
        />
        <ErrorMessage name={name} component="div" />
    </div>);
}

export default InputFormComponent;