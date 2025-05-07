import { ProductInterface } from "./productInterface";
import { IUser } from "./userInterface";

export interface IReview{
    user:IUser
    product: ProductInterface
    reviewRate: number
    review: string
    reviewDate: Date
}

export interface IReviewProducts{
    review_id: string;
    reviewRate: number;
    review: string;
    reviewDate: Date;
}