import React, { useState } from "react";
import ProductDetailDescription from "../components/ProductDetail/ProductDetailDescription";
import ProductDetailProductInfo from "../components/ProductDetail/ProductDetailProductInfo";
import ProductDetailReviews from "../components/ProductDetail/ProductDetailReviews";

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("description");

  const sections = [
    {
      title: "Black Automatic Watch",
      text: "The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.",
    },
    {
      title: "Fabric + Care",
      text: "Material: Soft wool blend Color: Various",
    },
    {
      title: "Sale performance",
      text: "The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had",
    },
  ];

  const keywords = [
    "colorful accessory",
    "stylish",
    "durable",
    "qwdqwdqw",
    "qwdwqdwqdwq",
  ];

  const product = {
    imageSrc: "/images/product4.png",
    rating: 4.9,
    price: 169.99,
    oldPrice: 199.99,
    sizes: [
      { label: "S", selected: true, disabled: false },
      { label: "M", selected: false, disabled: false },
      { label: "L", selected: false, disabled: false },
      { label: "XL", selected: false, disabled: false },
      { label: "2X", selected: false, disabled: true },
    ],
    count: 1,
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-10 md:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mb-[50px]">
          <ProductDetailProductInfo
            imageSrc={product.imageSrc}
            rating={product.rating}
            price={product.price}
            oldPrice={product.oldPrice}
            sizes={product.sizes}
            count={product.count}
          />
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
        {activeTab === "description" && (
          <ProductDetailDescription sections={sections} keywords={keywords} />
        )}
        {activeTab === "reviews" && <ProductDetailReviews />}
      </div>
    </div>
  );
};

export default ProductDetail;
