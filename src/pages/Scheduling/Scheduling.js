import { Button, Notification } from "@mantine/core";
import { Form, Formik } from "formik";
import { Home, X } from "tabler-icons-react";
import * as Yup from 'yup';
import DatePickerField from "../../components/DatePickerField/DatePickerField";
import DatePickerSchedulingField from "../../components/DatePickerSchedulingField/DatePickerSchedulingField";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import './Scheduling.scss'
import axios from '../../services/api';
import { useNavigate } from "react-router-dom";


function Scheduling() {
    const navigate = useNavigate()
    const SignupSchema = Yup.object().shape({
        patientName: Yup.string().required('Insira seu Nome'),
        birthDate: Yup.date().required('Insira a Data de nascimento'),
        schedulingDate: Yup.date().required('Insira a Data e Hora que deseja marcar a consulta')
    });

    const salvar = (values, { setSubmitting }) => {
        setSubmitting(true);

        console.log(JSON.stringify(values, null, 2));

        axios
            .post(`/scheduling`, values)
            .then((response) => {
                console.log(response);
                navigate('/consultas', { state: { dayProp: values.schedulingDate } })
                // setElements(response.data.items)
            })
            .catch(console.error, <Notification icon={<X size={18} />} color="red">
                Bummer! Notification without title
            </Notification>
            );

    }

    return (<div>
        <h1>Agende uma consulta</h1>
        <div className="form">
            <Formik
                initialValues={{ birthDate: '', schedulingDate: '', patientName: '' }}
                onSubmit={salvar}
                validationSchema={SignupSchema} >
                {(props) => {
                    const {

                        isSubmitting,
                        handleSubmit,
                        values,
                        handleChange,
                        handleBlur
                    } = props;
                    return (
                        <Form autoComplete="off" className="formik" onSubmit={handleSubmit}>

                            <InputFormComponent
                                icon={<Home />}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                name="patientName"
                                textPlaceholder="Insira Seu Nome"
                                value={values.patientName} />


                            <DatePickerField name="birthDate" />
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