import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const fetchMyOrder = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/myorderData", {
        method: 'POST',                                                                                                                                               
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail')
        })
      });

      const json = await response.json();
      setOrderData(json.orderData?.order_data || []);
    } catch (error) {
      console.error("Failed to fetch order data:", error);
    }
  };

  const fetchFoodItems = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      const data = await res.json();
      setFoodItems(data.food_items || []);
    } catch (err) {
      console.error("Error fetching food items:", err);
    }
  };

  useEffect(() => {
    fetchMyOrder();
    fetchFoodItems();
  }, []);

  // Helper to find image by food item ID
  const getImageById = (id) => {
    return foodItems.find(fi => fi._id === id)?.img || "https://via.placeholder.com/150";
  };

  return (
    <div>
      <Navbar />

      <div className='container'>
        <div className='row'>
          {orderData.length > 0 ? (
            orderData.slice(0).reverse().map((orderGroup, groupIndex) => (
              <div key={groupIndex}>
                <div className='m-auto mt-5 fs-4 fw-bold'>
                  Order Date: {orderGroup[0]?.Order_date || "Unknown Date"}
                  <hr />
                </div>

                <div className="row">
                  {orderGroup.slice(1).map((item, itemIndex) => (
                    <div
                      className='col-12 col-md-6 col-lg-3'
                      key={itemIndex}
                    >
                      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                        <img
                          src={getImageById(item.id)}
                          className="card-img-top"
                          alt={item.name}
                          style={{ height: "120px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <div className='container w-100 p-0'>
                            <div className="d-flex justify-content-between">
                              <span className='m-1 fw-semibold'>Qty: {item.qty}</span>
                              <span className='m-1 fw-semibold'>Size: {item.size}</span>
                            </div>
                            <div className='text-success fw-bold mt-2'>
                              Rs {item.price}/-
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className='fs-3 text-center m-5'>No past orders found.</div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
