import React from "react";
import { Facebook, Instagram, TikTok } from "../components/SocialIcons";
// style sheet
import './index.css';

export const LandingPage = () => {
    return (
        <div>
            <div id="landing-nav">
                <div id="side-bar">
                    <div><a href="#contact">Contact</a></div>
                    <div><a href="#hours">Hours</a></div>
                    <div><a href="#faq">FAQ</a></div>
                </div>
                <nav id="top-bar">
                    <h1 id="store-name">Deal Buster</h1>
                    <Facebook />
                    <Instagram />
                    <TikTok />
                </nav>
            </div>
        </div>
    )
}