import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const json = await response.json();
      setFoodItem(json.food_items || []);
      setFoodCat(json.foodCategory || []);
    } catch (error) {
      console.error("Data fetch error:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousal search={search} setSearch={setSearch} />

      <div className="container">
        {foodCat.length > 0 ? (
          foodCat.map((category) => {
            const items = foodItem.filter(
              (item) =>
                item.CategoryName === category.CategoryName &&
                item.name.toLowerCase().includes(search.toLowerCase())
            );

            return (
              <div className="row mb-3" key={category._id}>
                <div className="fs-3 m-3">{category.CategoryName}</div>
                <hr />
                {items.length > 0 ? (
                  items.map((item) => (
                    <div className="col-12 col-md-6 col-lg-3" key={item._id}>
                      <Card foodItem={item} options={item.options?.[0] || {}} />
                    </div>
                  ))
                ) : (
                  <div className="text-muted ms-3">No items found.</div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center my-5">
            <h4>Loading or no categories found...</h4>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
