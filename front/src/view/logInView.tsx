"use client"
import SubmitButton from "@/components/buttom/submitButtom";
import { Iregister } from "@/interface/registerInterface";
import { loginUser } from "@/lib/userFetch";
import { ErrorMessage, Field, Form, Formik } from "formik";

const LogInView = () => {
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
            const res = await loginUser(values)
            console.log("User logged in successfully:", res);
            alert("User logged in successfully")
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error logging in user:", error.message);
                alert("Error logging in user: " + error.message);
            } else {
                console.error("An unknown error occurred:", error);
                alert("An unknown error occurred: " + error);
            }
        }
         
    }

    return (

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
                <Form>
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
                        <label htmlFor="password">Password</label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                        />
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Log In
                    </button>
                    <div>
                        <SubmitButton label="Log In" isLoading={isSubmitting} />
                    </div>
                </Form>
            )}

        </Formik>

    );
};


export default LogInView;