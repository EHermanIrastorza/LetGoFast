"use client"

import SubmitButton from "@/components/buttom/submitButtom";
import { Iregister } from "@/interface/registerInterface"
import { registerUser } from "@/lib/userFetch";
import { ErrorMessage, Field, Form, Formik } from "formik";

const RegisterView = () => {
    const initialValues: Iregister = {
        name: "",
        password: "",
        city: "",
        birthday: "",
        email: "",
        credictCard: "",
    };

    const handleSubmit = async (values: Iregister) => {
        try {
            const res = await registerUser(values)
            console.log("User registered successfully:", res);
            alert("User registered successfully")
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error registering user:", error.message);
                alert("Error registering user: " + error.message);
            } else {
                console.error("An unknown error occurred:", error);
                alert("An unknown error occurred: " + error);
            }

        }

        console.log("Form submitted:", values);
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" placeholder="Name" />
                        <ErrorMessage name="name" component="div" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                        />
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <div>
                        <label htmlFor="city">City</label>
                        <Field type="text" id="city" name="city" placeholder="City" />
                        <ErrorMessage name="city" component="div" />
                    </div>

                    <div>
                        <label htmlFor="birthday">Birthday</label>
                        <Field type="date" id="birthday" name="birthday" />
                        <ErrorMessage name="birthday" component="div" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" placeholder="Email" />
                        <ErrorMessage name="email" component="div" />
                    </div>

                    <div>
                        <label htmlFor="credictCard">Credit Card</label>
                        <Field
                            type="text"
                            id="credictCard"
                            name="credictCard"
                            placeholder="Credit Card"
                        />
                        <ErrorMessage name="credictCard" component="div" />
                    </div>

                    <div>
                        <SubmitButton label="registrarse" isLoading={isSubmitting} />
                    </div>
                </Form>
            )}
        </Formik>
    );
}
export default RegisterView