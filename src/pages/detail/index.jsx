import React from "react";
import DetailComponent from "../../components/detailComponent";
import HeaderComponent from "../../components/shared/header";

export default function DetailPage(params) {
    return(
        <div className="container-main-page-detail">
            <HeaderComponent/>
            <DetailComponent/>
        </div>
    )
}