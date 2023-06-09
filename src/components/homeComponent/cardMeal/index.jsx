import React from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import './style.scss'
export default function CardMealComponent(params) {
    return(
        <div className="cont-card-main">
            <img src="" alt="" />
            <div className="padd">
                <div className="cont-name-and-favorite">
                    <h4 className="name">titulo</h4>
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