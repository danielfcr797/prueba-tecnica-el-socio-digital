import React from "react";
import "./style.scss";
import SearchIcon from "@mui/icons-material/Search";
import bannerOne from "../../assets/images/banner 1.png";
import bannerTwo from "../../assets/images/banner recetas.png";
import CardMealComponent from "./cardMeal";
import FilterCusineComponent from './filterCusine'
export default function HomeComponent(params) {
  return (
    <div className="cont-main-home-component">
      <div className="section-top-baners">
        <div className="cont-banners">
          <div className="banner">
            <img src={bannerOne} alt="" />
          </div>
          <div className="banner two">
            <img src={bannerTwo} alt="" />
          </div>
        </div>
      </div>
      <div className="section-bot">
        <div className="section-rigth-filters">
                <FilterCusineComponent/>
            
        </div>
        <div className="section-main-left">
          <div className="cont-search">
            <div className="title">
              <h5>Recetas</h5>
            </div>
            <div className="cont-input">
              <input type="text" placeholder="Search by name" />
              <SearchIcon className="icon" />
            </div>
          </div>
          <div className="cont-categories">
            <label htmlFor="" className="item-category active">
              categoria1
            </label>
          </div>
          <div className="content-results">
            <CardMealComponent />
            <CardMealComponent />
            <CardMealComponent />

          </div>
        </div>
      </div>
    </div>
  );
}
