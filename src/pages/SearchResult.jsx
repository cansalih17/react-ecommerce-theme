import React, { useEffect, useState } from "react";
import HomeProductCard from "../components/Home/HomeProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllProductsFunc } from "../redux/getAllProductsSlice";

const SearchResult = () => {
  const { product } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getAllProducts);

  useEffect(() => {
    dispatch(getAllProductsFunc());
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-10 md:px-0">
        <h3 className="font-semibold text-3xl text-primaryColor pb-6 border-b border-borderColor mb-8">
          Search result (
          {data &&
            data.filter((item) =>
              item.name.toLowerCase().includes(product.toLowerCase())
            ).length}
          )
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16">
          {data &&
            data
              .filter((item) =>
                item.name.toLowerCase().includes(product.toLowerCase())
              )
              .map((item) => (
                <HomeProductCard
                  id={item.id}
                  imageUrl={item.image}
                  productName={item.name}
                  discountedPrice={item.discountedPrice}
                  category={item.category}
                  price={item.price}
                  rating={item.rating}
                  numReviews={item.numReviews}
                  productURL={`/product-detail/${item.id}`}
                  categoryURL={`/category/${item.category}`}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
