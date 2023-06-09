import React, { useEffect, useState } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './style.scss'
import { getDetailMael } from "../../API/search";

export default function DetailComponent() {
    const params = useParams()
    const location = useLocation()
    const [detail, setDetail] = useState({})

    const navigate = useNavigate();

    async function getDetail(id) {
        let res = await getDetailMael(id)
        if (res) {
            setDetail(res)
        }
    }

    function handleBack() {
        navigate(-1);
    }



    useEffect(()=>{
        if (params.id) {
            getDetail(params.id)
        }
    },[location])
    return(
        <div className="cont-detail-component">
            <div className="absolute">
                <button onClick={() => handleBack()}>
                    <ArrowBackIosIcon className="back"/>
                </button>
            </div>
            <div className="cont-img-banner">
                <img src={detail.strMealThumb} alt="" />
            </div>
            <div className="hour">
                <AccessTimeIcon/> 20-30 
            </div>
            <div className="cont-main-title-detail">
                <div className="cont-left-title">
                    <div className="cont-title-and-stars">
                        <div className="title">
                            {detail.strMeal}
                        </div>
                        <div className="stars">
                            <StarIcon className="icon"/>
                            <StarIcon className="icon"/>
                            <StarIcon className="icon"/>
                            <StarIcon className="icon"/>
                            <StarBorderIcon className="icon"/>
                        </div>
                    </div>
                    <div className="reviewers">
                        32 reviewers
                    </div>
                </div>
                <div className="cont-favorite">
                    <FavoriteIcon className="favorite"/>
                </div>
            </div>
            <div className="cont-labels">
                <label htmlFor="" className="label">spain</label>
            </div>
            <div className="cont-instructions">
                <p>
                    {detail.strInstructions}
                </p>
            </div>
        </div>
    )
}