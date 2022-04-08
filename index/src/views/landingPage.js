import React from "react";
import { Facebook, Instagram, TikTok } from "../components/SocialIcons";
// style sheet
import './index.css';

export const LandingPage = () => {
    return (
        <div>
            <div id="landing-nav">
                <div id="side-bar">
                    <div>Contact</div>
                    <div>Gallery</div>
                    <div>FAQs</div>
                </div>
                <nav id="top-bar">
                    <h1 id="store-name">Deal Busters</h1>

                    <Facebook />
                    <Instagram />
                    <TikTok />
                </nav>
            </div>
        </div>
    )
}