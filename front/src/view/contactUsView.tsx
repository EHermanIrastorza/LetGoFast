"use client"
import SubmitButton from "@/components/buttom/submitButtom";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";

const ContactUsView = () => {
    const initialValues = {
        name: "",
        email: "",
        city: "",
        message: "",
    };

    const handleSubmit = async (values: typeof initialValues, { resetForm }: FormikHelpers<typeof initialValues>) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (res.ok) {
                alert("Mensaje enviado correctamente.");
                resetForm();
            } else {
                alert("Hubo un error al enviar el mensaje.");
            }
        } catch (err) {
            console.error(err);
            alert("Error de conexión.");
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>

                <div>
                    <label htmlFor="name">Name</label>
                    <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name" />
                    <ErrorMessage name="name" component="div" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email" />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <Field
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City" />
                    <ErrorMessage name="city" component="div" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <Field
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Message" />
                    <ErrorMessage name="message" component="div" />
                </div>
                <div>
                    <SubmitButton label="Send" isLoading={false} />
                </div>
            </Form>
        </Formik>
    );
};
export default ContactUsView;