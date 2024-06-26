import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import HomeTitle from "../components/Home/HomeTitle";
import HomeProductCard from "../components/Home/HomeProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsFunc } from "../redux/getAllProductsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getAllProducts);

  useEffect(() => {
    dispatch(getAllProductsFunc());
  }, []);

  return (
    <>
      <Hero />
      <div className="py-24">
        <div className="container mx-auto">
          <HomeTitle
            mainTitle={"Best Sellers."}
            subTitle={"Best selling of the month"}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 px-10 md:px-0">
            {data &&
              data.map((item, index) => (
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
    </>
  );
};

export default Home;
