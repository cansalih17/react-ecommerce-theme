import React from "react";
import HomeProductCard from "../components/Home/HomeProductCard";

const SearchResult = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-10 md:px-0">
        <h3 className="font-semibold text-3xl text-primaryColor pb-6 border-b border-borderColor mb-8">
          Search result (2)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16">
          <HomeProductCard
            imageUrl="/images/product1.png"
            productName="Black Automatic Watch"
            category="Accessories"
            price="169.99"
            rating="4.9"
            numReviews={98}
            productURL="/product/black-automatic-watch"
            categoryURL="/cart/add/black-automatic-watch"
          />
          <HomeProductCard
            imageUrl="/images/product1.png"
            productName="Black Automatic Watch"
            category="Accessories"
            price="169.99"
            rating="4.9"
            numReviews={98}
            productURL="/product/black-automatic-watch"
            categoryURL="/cart/add/black-automatic-watch"
          />
          <HomeProductCard
            imageUrl="/images/product1.png"
            productName="Black Automatic Watch"
            category="Accessories"
            price="169.99"
            rating="4.9"
            numReviews={98}
            productURL="/product/black-automatic-watch"
            categoryURL="/cart/add/black-automatic-watch"
          />
          <HomeProductCard
            imageUrl="/images/product1.png"
            productName="Black Automatic Watch"
            category="Accessories"
            price="169.99"
            rating="4.9"
            numReviews={98}
            productURL="/product/black-automatic-watch"
            categoryURL="/cart/add/black-automatic-watch"
          />
          <HomeProductCard
            imageUrl="/images/product1.png"
            productName="Black Automatic Watch"
            category="Accessories"
            price="169.99"
            rating="4.9"
            numReviews={98}
            productURL="/product/black-automatic-watch"
            categoryURL="/cart/add/black-automatic-watch"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
