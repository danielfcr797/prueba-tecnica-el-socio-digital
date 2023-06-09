import React, { useEffect, useState } from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from "react-router-dom";

import './style.scss'
export default function CardMealComponent({data}) {
    
    const [infoMeal, setInfoMeal] = useState({})
    const navigate = useNavigate();


    function redirectDetail() {
        navigate(`/detail/${infoMeal.idMeal}`);
    }

    useEffect(()=>{
        setInfoMeal(data)
    }, [data])
    return(
        <div className="cont-card-main" onClick={() => redirectDetail()}>
            <img src={infoMeal?.strMealThumb} alt="" />
            <div className="padd">
                <div className="cont-name-and-favorite">
                    <h4 className="name">{infoMeal?.strMeal}</h4>
                    <FavoriteBorderIcon className="icon"/>
                </div>
                <div className="cont-stars">
                <StarIcon className="icon"/>
                <StarIcon className="icon"/>
                <StarIcon className="icon"/>
                <StarIcon className="icon"/>
                <StarBorderIcon className="icon"/>

                </div>
                <div className="cont-labels">
                    <div className="labels">
                        <label htmlFor="" className="item">spain</label>
                    </div>
                    <div className="time"> <AccessTimeIcon/> 20-30</div>
                </div>
            </div>
        </div>
    )
}