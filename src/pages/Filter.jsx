import React from "react";
import HomeProductCard from "../components/Home/HomeProductCard";

const Filter = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-10 md:px-0">
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-10">
          <div className="col-span-3 lg:col-span-1 flex flex-col">
            <div className="pb-10 mb-8 border-b border-borderColor">
              <h3 className="font-semibold text-lg text-primaryColor mb-6">
                Search
              </h3>
              <input
                type="text"
                className="form-input border border-borderColor  px-3 py-3 w-full"
              />
            </div>
            <div className="pb-10 mb-8 border-b border-borderColor">
              <h3 className="font-semibold text-lg text-primaryColor mb-6">
                Price range
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col justify-center">
                  <span className="text-gray-700 select-none mb-2">
                    Min Price
                  </span>
                  <input
                    type="text"
                    className="form-input border border-borderColor  px-3 py-3 w-full"
                  />
                </label>
                <label className="flex flex-col justify-center">
                  <span className="text-gray-700 select-none mb-2">
                    Max Price
                  </span>
                  <input
                    type="text"
                    className="form-input border border-borderColor  px-3 py-3 w-full"
                  />
                </label>
              </div>
              <button className="mt-4 bg-primaryColor text-white py-3 px-5 rounded">
                Filtreyi Uygula
              </button>
            </div>
            <div className="pb-10 mb-8 border-b border-borderColor">
              <h3 className="font-semibold text-lg text-primaryColor mb-6">
                Categories
              </h3>
              <div className="flex flex-col gap-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 outline-none"
                  />
                  <span className="ml-2 text-gray-700 select-none">
                    Women fashion
                  </span>
                </label>
              </div>
            </div>

            <div className="pb-10 mb-8">
              <h3 className="font-semibold text-lg text-primaryColor mb-6">
                Sort order
              </h3>
              <div className="flex flex-col gap-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray-600 outline-none"
                    name="radio"
                  />
                  <span className="ml-2 text-gray-700 select-none">
                    Women fashion
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-span-3  lg:grid-cols-2 xl:grid-cols-3 grid grid-cols-1 gap-10">
            <HomeProductCard
              imageUrl="images/product1.png"
              productName="Black Automatic Watch"
              category="Accessories"
              price="169.99"
              rating="4.9"
              numReviews={98}
              productURL="/product/black-automatic-watch"
              categoryURL="/cart/add/black-automatic-watch"
            />
            <HomeProductCard
              imageUrl="images/product1.png"
              productName="Black Automatic Watch"
              category="Accessories"
              price="169.99"
              rating="4.9"
              numReviews={98}
              productURL="/product/black-automatic-watch"
              categoryURL="/cart/add/black-automatic-watch"
            />
            <HomeProductCard
              imageUrl="images/product1.png"
              productName="Black Automatic Watch"
              category="Accessories"
              price="169.99"
              rating="4.9"
              numReviews={98}
              productURL="/product/black-automatic-watch"
              categoryURL="/cart/add/black-automatic-watch"
            />
            <HomeProductCard
              imageUrl="images/product1.png"
              productName="Black Automatic Watch"
              category="Accessories"
              price="169.99"
              rating="4.9"
              numReviews={98}
              productURL="/product/black-automatic-watch"
              categoryURL="/cart/add/black-automatic-watch"
            />
            <HomeProductCard
              imageUrl="images/product1.png"
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
    </div>
  );
};

export default Filter;
