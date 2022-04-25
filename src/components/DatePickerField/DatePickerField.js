import { ErrorMessage, useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { Input } from "@mantine/core";

function DatePickerField({ ...props }) {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <div>
            <DatePicker
                {...field}
                {...props}
                dateFormat="dd/MM/yyyy"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                maxDate={new Date()}
                selected={(field.value && new Date(field.value)) || null}
                onChange={(val) => {
                    setFieldValue(field.name, val);
                }}
                customInput={<Input />}
            />
            <ErrorMessage name={field.name} component="div" />

        </div>

    );
}
//
// excludeTimes={[
//     setHours(setMinutes(new Date(), 0), 17),
//     setHours(setMinutes(new Date(), 30), 18),
//     setHours(setMinutes(new Date(), 30), 19),
//     setHours(setMinutes(new Date(), 30), 17),
//   ]}
export default DatePickerField;

// const filterPassedTime = (time) => {
//     const currentDate = new Date();
//     const selectedDate = new Date(time);

//     return currentDate.getTime() < selectedDate.getTime();
//   };

// filterTime={filterPassedTime}