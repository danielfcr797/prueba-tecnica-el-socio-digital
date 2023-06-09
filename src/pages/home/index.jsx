import React from "react";
import HomeComponent from "../../components/homeComponent";
import HeaderComponent from "../../components/shared/header";
import './style.scss'

export default function HomePage(params) {
    return(
        <div className="container-main-page-home">
            <HeaderComponent/>
            <HomeComponent/>
        </div>
    )
}