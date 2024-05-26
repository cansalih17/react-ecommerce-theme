import React from "react";
import { FaStar } from "react-icons/fa";

const ProductDetailReviews = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border border-borderColor rounded-lg p-4"
        >
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-primaryColor font-semibold">{review.user}</h4>
            <div className="flex items-center">
              <FaStar className="text-[#FBBF24]" />
              <span className="ml-1 text-primaryColor font-semibold">
                {review.rating}
              </span>
            </div>
          </div>
          <p className="text-bodyTextColor">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetailReviews;
