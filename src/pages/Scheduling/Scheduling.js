import { Button, Notification } from "@mantine/core";
import { Form, Formik } from "formik";
import { Home } from "tabler-icons-react";
import * as Yup from 'yup';
import DatePickerField from "../../components/DatePickerField/DatePickerField";
import DatePickerSchedulingField from "../../components/DatePickerSchedulingField/DatePickerSchedulingField";
import InputFormComponent from "../../components/InputFormComponent/InputFormComponent";
import './Scheduling.scss'
import axios from '../../services/api';
import { useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
import ButtonGoHome from '../../components/ButtonGoHome/ButtonGoHome';


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
        try {
            axios
                .post(`/scheduling`, values)
                .then((response) => {
                    console.log(response);
                    navigate('/consultas', { state: { dayProp: values.schedulingDate } })
                })
        } catch (error) {
            showNotification({
                color: "red",
                title: "Error",
                message: `Horario Cheio`,
            });
        }
        setTimeout(() => {
            setSubmitting(false);
        }, 2000);
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
                            <ButtonGoHome />
                        </Form>
                    );
                }}
            </Formik>
        </div>
    </div>);
}

export default Scheduling;