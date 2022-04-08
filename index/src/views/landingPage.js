import React from "react";
import { Facebook, Instagram, TikTok } from "../components/SocialIcons";
// style sheet
import './index.css';

export const LandingPage = () => {
    return (
        <div>
            <div id="landing-nav">
                <div id="side-bar">
                    <h1>Deal Buster</h1>
                    <div>Contact</div>
                    <div>Gallery</div>
                    <div>FAQs</div>
                </div>
                <nav id="top-bar">
                    <Facebook />
                    <Instagram />
                    <TikTok />
                </nav>
            </div>
        </div>
    )
}