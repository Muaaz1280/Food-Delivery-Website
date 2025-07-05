import React from "react";
import "./Carousal.css";

export default function Carousal({ search, setSearch }) {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade carousel-slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
     
      <div className="carousel-search">
        <input
          type="text"
          className="form-control"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-warning">Search</button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-img-wrapper">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
              className="d-block w-100"
              alt="Burger"
            />
          </div>
          <div className="carousel-caption carousel-caption-custom">
            <h5 className="yellow-text caption-title">Delicious Burger</h5>
            <p className="caption-desc">Juicy grilled burger with cheese and lettuce.</p>
          </div>
        </div>

        <div className="carousel-item">
          <div className="carousel-img-wrapper">
            <img
              src="https://img.taste.com.au/pZW2iO5Z/w720-h480-cfill-q80/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg"
              className="d-block w-100"
              alt="Momos"
            />
          </div>
          <div className="carousel-caption carousel-caption-custom">
            <h5 className="cyan-text caption-title">Steamed Momos</h5>
            <p className="caption-desc">Hot momos with spicy dipping sauce.</p>
          </div>
        </div>

        <div className="carousel-item">
          <div className="carousel-img-wrapper">
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              className="d-block w-100"
              alt="Pizza"
            />
          </div>
          <div className="carousel-caption carousel-caption-custom">
            <h5 className="red-text caption-title">Cheesy Pizza</h5>
            <p className="caption-desc">Thin crust pizza loaded with mozzarella.</p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
