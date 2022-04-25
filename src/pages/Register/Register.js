import { Formik, Form } from 'formik';
import './Register.scss'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';
import { At, Lock } from 'tabler-icons-react';
import { showNotification } from "@mantine/notifications";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';
import DatePickerField from '../../components/DatePickerField/DatePickerField';
import { Button } from '@mantine/core';
import axios from '../../services/api';
import { useNavigate } from 'react-router-dom';
import ButtonGoHome from '../../components/ButtonGoHome/ButtonGoHome';

function Register() {

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Insira o email'),
        password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Insira a Senha'),
        birthDate: Yup.date().required('Insira a Data de nascimento')
    });
    const navigate = useNavigate()

    const salvar = (values, { setSubmitting }) => {
        setSubmitting(true);

        console.log(JSON.stringify(values, null, 2));

        try {
            axios
                .post(`/user`, values)
                .then((response) => {
                    console.log(response);
                    showNotification({
                        color: "green",
                        title: "Sucesso",
                        message: `cadastrado Com Sucesso`,
                    });
                    navigate('/')
                })
                .catch(
                    showNotification({
                        color: "red",
                        title: "Error",
                        message: `Erro ao se registrar`,
                    }));

            setTimeout(() => {
                setSubmitting(false);
            }, 2000);
        } catch (error) {

        }
    }

    return (<div>
        <h1>Cadastre-se-se para agendar uma consulta</h1>
        <div className="form">
            <Formik
                initialValues={{ birthDate: "", email: '', password: '', name: '' }}
                onSubmit={salvar}
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
                                name="email"
                                textPlaceholder="Insira Seu Email"
                                value={values.email} />
                            <InputFormComponent
                                icon={<At />}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                name="name"
                                textPlaceholder="Insira Seu Nome"
                                value={values.name} />

                            <InputFormComponent
                                icon={<Lock />}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                name="password"
                                textPlaceholder="Insira Sua Senha"
                                value={values.password} />

                            <DatePickerField name="birthDate" />

                            <Button fullWidth type="submit" disabled={isSubmitting} radius="md" size="lg" uppercase onClick={onclick}>
                                Cadastrar
                            </Button>
                            <div className="ButtonGoHome" >
                                <ButtonGoHome />

                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    </div>);
}

export default Register;

