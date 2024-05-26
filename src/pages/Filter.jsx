import React, { useEffect, useState } from "react";
import HomeProductCard from "../components/Home/HomeProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsFunc } from "../redux/getAllProductsSlice";

const Filter = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getAllProducts);
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(9999);
  const [sortBy, setSortBy] = useState("Default");
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    dispatch(getAllProductsFunc());
  }, []);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const handleSearchFilter = (e) => {
    setSearch(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

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
                value={search}
                onChange={(e) => handleSearchFilter(e)}
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
                    type="number"
                    min={1}
                    value={minPrice}
                    onChange={(e) => handleMinPriceChange(e)}
                    className="form-input border border-borderColor  px-3 py-3 w-full"
                  />
                </label>
                <label className="flex flex-col justify-center">
                  <span className="text-gray-700 select-none mb-2">
                    Max Price
                  </span>
                  <input
                    type="number"
                    min={2}
                    value={maxPrice}
                    onChange={(e) => handleMaxPriceChange(e)}
                    className="form-input border border-borderColor  px-3 py-3 w-full"
                  />
                </label>
              </div>
              {/* <button className="mt-4 bg-primaryColor text-white py-3 px-5 rounded">
                Filtreyi Uygula
              </button> */}
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
                    onChange={() => handleCategoryChange("Accessories")}
                    checked={selectedCategories.includes("Accessories")}
                  />
                  <span className="ml-2 text-gray-700 select-none">
                    Accessories
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 outline-none"
                    onChange={() => handleCategoryChange("Electronics")}
                    checked={selectedCategories.includes("Electronics")}
                  />
                  <span className="ml-2 text-gray-700 select-none">
                    Electronics
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 outline-none"
                    onChange={() => handleCategoryChange("Bags")}
                    checked={selectedCategories.includes("Bags")}
                  />
                  <span className="ml-2 text-gray-700 select-none">Bags</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 outline-none"
                    onChange={() => handleCategoryChange("Home & Kitchen")}
                    checked={selectedCategories.includes("Home & Kitchen")}
                  />
                  <span className="ml-2 text-gray-700 select-none">
                    Home & Kitchen
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
                    checked={sortBy === "Default" && true}
                    type="radio"
                    className="form-radio h-5 w-5 text-gray-600 outline-none"
                    name="sort"
                    value="Default"
                    onChange={(e) => handleSortByChange(e)}
                  />
                  <span className="ml-2 text-gray-700 select-none">
                    Default
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray-600 outline-none"
                    name="sort"
                    value="A-Z"
                    onChange={(e) => handleSortByChange(e)}
                  />
                  <span className="ml-2 text-gray-700 select-none">A - Z</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray-600 outline-none"
                    name="sort"
                    value="Z-A"
                    onChange={(e) => handleSortByChange(e)}
                  />
                  <span className="ml-2 text-gray-700 select-none">Z - A</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray-600 outline-none"
                    name="sort"
                    value="LowToHigh"
                    onChange={(e) => handleSortByChange(e)}
                  />
                  <span className="ml-2 text-gray-700 select-none">
                    Price: Low to high
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-gray-600 outline-none"
                    name="sort"
                    value="HighToLow"
                    onChange={(e) => handleSortByChange(e)}
                  />
                  <span className="ml-2 text-gray-700 select-none">
                    Price: High to low
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-span-3  lg:grid-cols-2 xl:grid-cols-3 grid grid-cols-1 gap-10">
            {products &&
              products
                .filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
                .filter(
                  (item) => item.price >= minPrice && item.price <= maxPrice
                )
                .sort((a, b) => {
                  switch (sortBy) {
                    case "A-Z":
                      return a.name.localeCompare(b.name);
                    case "Z-A":
                      return b.name.localeCompare(a.name);
                    case "LowToHigh":
                      return a.price - b.price;
                    case "HighToLow":
                      return b.price - a.price;
                    default:
                      return 0;
                  }
                })
                .filter(
                  (item) =>
                    selectedCategories.length === 0 ||
                    selectedCategories.includes(item.category)
                )
                .map((item, index) => (
                  <HomeProductCard
                    id={item.id}
                    imageUrl={item.image}
                    productName={item.name}
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
    </div>
  );
};

export default Filter;
