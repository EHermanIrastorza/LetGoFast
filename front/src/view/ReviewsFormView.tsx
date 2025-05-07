"use client"

import SubmitButton from "@/components/buttom/submitButtom";
import { ProductInterface } from "@/interface/productInterface";
import { IReview } from "@/interface/reviewInterface";
import { IUser } from "@/interface/userInterface";
import { postReview } from "@/lib/reviewFetch";
import { ErrorMessage, Field, Form, Formik } from "formik";

const ReviewForm: React.FC<{ user: IUser; product: ProductInterface }> = ({ user, product }) => {
    const initialValues = {
      review: "",
      reviewRate: 1,
    };

    const handleSubmit = async (
        values: { review: string; reviewRate: number },
        { resetForm }: { resetForm: () => void }
    ) => {
        const reviewData: IReview = {
            user,
            product,
            review: values.review,
            reviewRate: values.reviewRate,
            reviewDate: new Date(),
        };

        try {
            await postReview(reviewData); 
            resetForm();
        } catch (error) {
            console.error("Error al enviar la reseña:", error);
        }
    };

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Dejá tu reseña:</h3>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="review">Comentario</label>
                            <Field
                                as="textarea"
                                name="review"
                                className="w-full p-2 border rounded"
                            />
                            <ErrorMessage
                                name="review"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="reviewRate">Puntaje</label>
                            <Field
                                as="select"
                                name="reviewRate"
                                className="w-full p-2 border rounded"
                            >
                                {[1, 2, 3, 4, 5].map((rate) => (
                                    <option key={rate} value={rate}>
                                        {rate} ⭐
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage
                                name="reviewRate"
                                component="div"
                                className="text-red-500 text-sm"
                            />
                        </div>

                        <SubmitButton label="Enviar Reseña" isLoading={isSubmitting} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ReviewForm;
