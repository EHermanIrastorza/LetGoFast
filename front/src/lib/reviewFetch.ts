import { IReview } from "@/interface/reviewInterface";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function postReview(userData: IReview): Promise<IReview> {
    try {
      const res = await fetch(`${APIURL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userData.user.id,
          product_id: userData.product.id,
          review: userData.review,
          reviewRate: userData.reviewRate,
        }),
      });
  
      if (!res.ok) {
        throw new Error("Failed to post review");
      }
  
      const review: IReview = await res.json();
      console.log("review", review);
      return review;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  }

  

export async function getReviews(): Promise<IReview[]> {
    try {
        const res = await fetch(`${APIURL}/reviews`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            throw new Error("Failed to fetch reviews");
        }
        const reviews: IReview[] = await res.json();
        console.log("reviews", reviews);
        return reviews;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occurred");
        }
    } 
}