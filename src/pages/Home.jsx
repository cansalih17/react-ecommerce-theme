import React from "react";
import Hero from "../components/Hero/Hero";
import HomeTitle from "../components/Home/HomeTitle";
import HomeProductCard from "../components/Home/HomeProductCard";

const Home = () => {
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
            <HomeProductCard
              imageUrl="images/product1.png"
              productName="Black Automatic Watch"
              category="Accessories"
              price="169.99"
              rating="4.9"
              numReviews={98}
              productURL="/product-detail/1"
              categoryURL="/wdqwdwqd"
            />
            <HomeProductCard
              imageUrl="images/product1.png"
              productName="Black Automatic Watch"
              category="Accessories"
              price="169.99"
              rating="4.9"
              numReviews={98}
              productURL="/product-detail/1"
              categoryURL="/carqwdqwdic-watch"
            />
            <HomeProductCard
              imageUrl="images/product1.png"
              productName="Black Automatic Watch"
              category="Accessories"
              price="169.99"
              rating="4.9"
              numReviews={98}
              productURL="/product-detail/1"
              categoryURL="/caqwdqwdatch"
            />
            <HomeProductCard
              imageUrl="images/product1.png"
              productName="Black Automatic Watch"
              category="Accessories"
              price="169.99"
              rating="4.9"
              numReviews={98}
              productURL="/product-detail/1"
              categoryURL="/carqwdqwdwatch"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
