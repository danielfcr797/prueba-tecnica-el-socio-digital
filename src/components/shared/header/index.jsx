import React, { useEffect } from "react";
import './style.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useLocation } from 'react-router-dom'

export default function HeaderComponent(params) {
    
    const location = useLocation()
    const path = '/home';

    return(
        <div className="cont-main-header">
            <div className="section-left">
                <div className="title">
                    <h5>
                        <Link to={'/home'}className={'link'}> 
                        KUKS FRESH
                        </Link>
                    </h5>
                </div>
                <div className="cont-tabs">
                    <div className={`tabs ${location.pathname === path && 'active'}`}>
                        <Link to={'/home'}className={'linkTab'}> 
                        Home
                        </Link>
                    </div>
                        <div className={`tabs ${location.pathname !== path ? 'active': ''}`}>
                            Detail
                        </div>
                </div>
            </div>
            <div className="section-profile">
                    <AccountCircleIcon className="icon"/>
            </div>
        </div>
    )
}