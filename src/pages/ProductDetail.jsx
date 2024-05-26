import React, { useEffect, useState } from "react";
import ProductDetailDescription from "../components/ProductDetail/ProductDetailDescription";
import ProductDetailProductInfo from "../components/ProductDetail/ProductDetailProductInfo";
import ProductDetailReviews from "../components/ProductDetail/ProductDetailReviews";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailFunc } from "../redux/getProductDetailSlice";

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("description");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getProductDetail);

  useEffect(() => {
    dispatch(getProductDetailFunc(id));
  }, []);

  return (
    <div className="py-10">
      <div className="container mx-auto px-10 md:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mb-[50px]">
          {data && (
            <ProductDetailProductInfo
              imageSrc={data.image}
              rating={data.rating}
              price={data.price}
              discountedPrice={data.discountedPrice}
              productName={data.name}
              category={data.category}
              id={data.id}
              productURL={`/product-detail/${data.id}`}
              categoryURL={`/category/${data.category}`}
            />
          )}
        </div>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 px-4 ${
              activeTab === "description"
                ? "bg-primaryColor text-white"
                : "bg-grayBackgroundColor text-primaryColor"
            } rounded-l-full`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-2 px-4 ${
              activeTab === "reviews"
                ? "bg-primaryColor text-white"
                : "bg-grayBackgroundColor text-primaryColor"
            } rounded-r-full`}
          >
            Reviews
          </button>
        </div>
        {activeTab === "description" && data && (
          <ProductDetailDescription data={data} />
        )}

        {activeTab === "reviews" && data && (
          <ProductDetailReviews reviews={data.reviews} />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
