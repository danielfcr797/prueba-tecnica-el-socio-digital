import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './style.scss'

export default function DetailComponent(params) {
    return(
        <div className="cont-detail-component">
            <div className="absolute">
                <ArrowBackIosIcon className="back"/>
            </div>
            <div className="cont-img-banner">
                <img src="" alt="" />
            </div>
            <div className="hour">
                <AccessTimeIcon/> 20-30 
            </div>
            <div className="cont-main-title-detail">
                <div className="cont-left-title">
                    <div className="cont-title-and-stars">
                        <div className="title">
                            titulo
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, veniam fugiat iure dolore ratione saepe pariatur quidem quis nihil esse mollitia nam molestias cupiditate, nisi placeat voluptas laboriosam, ducimus impedit.

                </p>
            </div>
        </div>
    )
}