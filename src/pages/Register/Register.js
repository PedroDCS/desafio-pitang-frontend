import { Formik, Form } from 'formik';
import './Register.scss'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent';
import { At, Lock } from 'tabler-icons-react';

import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';
import DatePickerField from '../../components/DatePickerField/DatePickerField';
import { Button } from '@mantine/core';
function Register() {

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Insira o email'),
        password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Insira a Senha'),
        bithDate: Yup.date().required('Insira a Data de nascimento')
    });

    return (<div>
        <h1>Cadastre-se-se para agendar uma consulta</h1>
        <div className="form">
            <Formik
                initialValues={{ bithDate: "", email: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
                validationSchema={SignupSchema}
            >
                {(props) => {
                    const { dirty,
                        isSubmitting,
                        handleSubmit,
                        handleReset,
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
                                icon={<Lock />}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                name="password"
                                textPlaceholder="Insira Sua Senha"
                                value={values.password} />

                            <DatePickerField name="bithDate" />
                            <button
                                type="button"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                            >
                                Reset
                            </button>
                            <Button fullWidth type="submit" disabled={isSubmitting} radius="md" size="lg" uppercase onClick={onclick}>
                                Cadastrar
                            </Button>

                        </Form>
                    );
                }}
            </Formik>
        </div>
    </div>);
}

export default Register;

