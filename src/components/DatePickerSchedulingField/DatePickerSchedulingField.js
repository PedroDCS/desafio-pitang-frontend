import { ErrorMessage, useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { Input } from "@mantine/core";
import ptBR from 'date-fns/locale/pt-BR';
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'


function DatePickerSchedulingField({ ...props }) {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);

    return (
        <div>
            <DatePicker
                {...field}
                {...props}
                dateFormat="dd/MM/yyyy h:mm aa"
                peekNextMonth
                showMonthDropdown
                locale={ptBR}
                showYearDropdown
                dropdownMode="select"
                minDate={new Date()}
                showTimeSelect
                minTime={setHours(setMinutes(new Date(), 0), 8)}
      maxTime={setHours(setMinutes(new Date(), 0), 17)}
                
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
export default DatePickerSchedulingField;

// const filterPassedTime = (time) => {
//     const currentDate = new Date();
//     const selectedDate = new Date(time);

//     return currentDate.getTime() < selectedDate.getTime();
//   };

// filterTime={filterPassedTime}