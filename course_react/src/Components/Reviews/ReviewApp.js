import React from "react";
import Review from "./Review";
const ReviewApp = () => {
  return (
    <div  className="bg-[#F0F5FC]">
      <div className="pt-24">
      <h4 className="is-size-4 underline underline-offset-8 decoration-3 decoration-amber-600 text-center  font-bold mb-6">
        Project Reviews
      </h4>
      <Review />
    </div>
    </div>
  );
};

export default ReviewApp;
