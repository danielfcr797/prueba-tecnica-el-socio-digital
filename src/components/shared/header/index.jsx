import React from "react";
import './style.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function HeaderComponent(params) {
    return(
        <div className="cont-main-header">
            <div className="section-left">
                <div className="title">
                    <h5>KUKS FRESH</h5>
                </div>
                <div className="cont-tabs">
                    <div className="tabs active">
                        Home
                    </div>
                    <div className="tabs ">
                        Nosotros
                    </div>
                    <div className="tabs">
                        Videos
                    </div>
                </div>
            </div>
            <div className="section-profile">
                    <AccountCircleIcon className="icon"/>
            </div>
        </div>
    )
}