import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCountries } from "../../../API/search";
import './style.scss'
export default function FilterCusineComponent({active}) {
    
  const [setSearchParams] = useSearchParams()
  const [countries, setCountries] = useState([])

    async function getAllCountries() {
      let response = await getCountries();
      if (response) {
        setCountries(response);
      }
    }

    function handleArea(e) {
        const {value} = e.target
        setSearchParams(new URLSearchParams({
            countrie: value,
          }));
    }

    useEffect(() =>{
        getAllCountries()
    },[])

    return(
        <div className="cont-main-filter">
            <div className="title">
                <h4 className="title">Filter by Cusine</h4>
            </div>
            <div className="results-cusines">
                {
                    countries.map((c, i) =>(
                        <button key={i} value={c?.strArea} onClick={(e) => handleArea(e)} className={`item ${active === c?.strArea && 'active'}`}>{c?.strArea}</button>

                    ))
                }

            </div>

        </div>
    )
}