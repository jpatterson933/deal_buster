import React from "react";
import './index.css';
import { BannerDetails } from "./bannerDetails";

export const Banner = () => {
    const banners = BannerDetails.map((banner) => {
        return (
            <div className="banner" key={banner.id}>
                    <div id="day">{banner.day}</div>
                    <div id="details">{banner.details}</div>
                    <div id="price">{banner.price}</div>
            </div>
        )
    })
    return (
        <>
            {banners}
        </>
    )
}