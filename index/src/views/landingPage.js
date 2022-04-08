import React from "react";
import { Facebook, Instagram, TikTok } from "../components/SocialIcons";
// style sheet
import './index.css';



export const LandingPage = () => {
    return (
        <div>
            <div id="landing-nav">
                <div id="side-bar">
                    <div>Deal Buster</div>
                    <div>Contact</div>
                    <div>Gallery</div>
                    <div>FAQs</div>
                </div>
                <nav id="top-bar">
                    <div>FB<Facebook /></div>
                    <div>IG <Instagram /></div>
                    <div>TT<TikTok /></div>
                </nav>
            </div>

        </div>
    )
}