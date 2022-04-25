import { Input } from "@mantine/core";
import { ErrorMessage } from "formik";

function InputFormComponent({ handleChange, handleBlur, value, name, textPlaceholder, icon }) {
    return (<div>
        <label htmlFor={textPlaceholder}>{textPlaceholder} abaixo:</label>
        <Input
            icon={icon}
            placeholder={textPlaceholder}
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