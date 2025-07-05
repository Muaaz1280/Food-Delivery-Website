import React, { useState } from "react";
import { useDispatchCart } from "./ContextReducer";

export default function Card({ foodItem, options }) {
  const dispatch = useDispatchCart();
  const { name, img, description, _id } = foodItem;

  const sizeOptions = Object.keys(options || {});
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(sizeOptions[0] || "");

  const unitPrice = Number(options[size]) || 0;
  const finalPrice = qty * unitPrice;

  const handleAddToCart = () => {
    console.log("🛒 Add to cart:", {
      id: _id,
      name,
      qty,
      size,
      unitPrice,
      total: finalPrice,
    });

    dispatch({
      type: "ADD",
      item: {
        id: _id,
        name,
        qty,
        size,
        unitPrice,
      },
    });

    // Optional: reset quantity
    setQty(1);
  };

  return (
    <div className="card mt-3 h-100">
      <img
        src={img || "https://cdn-icons-png.flaticon.com/512/857/857681.png"}
        className="card-img-top"
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <select
              className="form-select me-2"
              style={{ width: "30%" }}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            >
              {[...Array(6)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              className="form-select"
              style={{ width: "60%" }}
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {sizeOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <h6 className="mt-2">Price: Rs. {finalPrice}</h6>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
