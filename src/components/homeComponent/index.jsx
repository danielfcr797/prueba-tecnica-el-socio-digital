import React, { useEffect, useState } from "react";
import "./style.scss";
import SearchIcon from "@mui/icons-material/Search";
import bannerOne from "../../assets/images/banner 1.png";
import bannerTwo from "../../assets/images/banner recetas.png";
import CardMealComponent from "./cardMeal";
import FilterCusineComponent from './filterCusine'
import { getCategories, getMeals } from "../../API/search";
import { useLocation, useSearchParams } from "react-router-dom";


export default function HomeComponent() {
  const [categories, setCategories] = useState([])
  const [paramActive, setParamActive] = useState('');
  const [meals, setMeals] = useState([])
  const [searchParams,  setSearchParams] = useSearchParams()
  const [params] = useState(['search', 'cat', 'countrie']) 

  const location = useLocation();

  async function getAllCategories() {
    let response = await getCategories();
    if (response) {
      setCategories(response);
    }
  }

  function handleSearch(e) {
    const {value} = e.target;
    setSearchParams(new URLSearchParams({
      search: value,
    }));
  }

  function handleCategories(e) {
    const {value} = e.target
    setSearchParams(new URLSearchParams({
      cat: value,
    }));
  }

  async function getAllMeals(param, value) {
    let res = await getMeals(param, value)
    if (res) {
      setMeals(res);
    }
  }

  useEffect(()=>{
    getAllCategories()
  },[])
  
  useEffect(()=>{
    let paramsConsult = 'search';
    let value = ''
    for (let i = 0; i < params.length; i++) {
      if (searchParams.get(params[i])) {
        paramsConsult = params[i] 
        value = searchParams.get(params[i]);
        setParamActive(value)
      } 
      
    }
    getAllMeals(paramsConsult, value)

}, [location])
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
                <FilterCusineComponent active={paramActive}/>
            
        </div>
        <div className="section-main-left">
          <div className="cont-search">
            <div className="title">
              <h5>Recetas</h5>
            </div>
            <div className="cont-input">
              <input type="text" placeholder="Search by name" onChange={(e) => handleSearch(e)} />
              <SearchIcon className="icon" />
            </div>
          </div>
          <div className="cont-categories">
            <button className="item-category">
                    All
                  </button>
            {
              categories?.map((cat,i) =>(
                
                <button key={i} value={cat?.strCategory} onClick={(e) => handleCategories(e)} className={`item-category ${paramActive === cat?.strCategory && 'active' } `}>
                  {cat?.strCategory}
                </button>

              ))
            }
          </div>
          <div className="content-results">
            {
              meals?.map((m,i) =>(
                <CardMealComponent key={i} data={m} />

              ))
            }

          </div>
        </div>
      </div>
    </div>
  );
}
