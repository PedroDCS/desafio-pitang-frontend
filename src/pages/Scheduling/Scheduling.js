import { Button } from "@mantine/core";
import { Form, Formik } from "formik";
import { At } from "tabler-icons-react";
import * as Yup from 'yup';
import DatePickerField from "../../components/DatePickerField/DatePickerField";
import DatePickerSchedulingField from "../../components/DatePickerSchedulingField/DatePickerSchedulingField";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import './Scheduling.scss'
function Scheduling() {

    const SignupSchema = Yup.object().shape({
        patientName: Yup.string().required('Insira o email'),
        bithDate: Yup.date().required('Insira a Data de nascimento'),
        schedulingDate: Yup.date().required('Insira a Data de nascimento')
    });

    return (<div>
        <h1>Agende uma consulta</h1>
        <div className="form">
            <Formik
                initialValues={{ bithDate: '', schedulingDate: '' ,patientName: ''}}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(Date(new Date(values.schedulingDate).getTime().toLocaleString("pt-BR")));
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
                validationSchema={SignupSchema}
            >
                {(props) => {
                    const {
                        isSubmitting,
                        handleSubmit,
                        values,
                        handleChange,
                        handleBlur
                    } = props;
                    return (
                        <Form className="formik" onSubmit={handleSubmit}>

                            <InputFormComponent
                                icon={<At />}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                name="patientName"
                                placeholder="Insira Seu Nome"
                                value={values.patientName} />

                      
                            <DatePickerField name="bithDate" />
                            <DatePickerSchedulingField name="schedulingDate" />
                            
                            <Button className="Button" fullWidth type="submit" disabled={isSubmitting} radius="md" size="lg" uppercase onClick={onclick}>
                                Cadastrar
                            </Button>

                        </Form>
                    );
                }}
            </Formik>
        </div>
    </div>);
}

export default Scheduling;