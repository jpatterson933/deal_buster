import React from "react";
// style sheet
import './index.css';

export const Facebook = () => {
    return (
        <div className="social-icons">
            <a href="https://www.facebook.com/DealBusterLLC">
                <svg className="shadow" xmlns="http://www.w3.org/2000/svg" aria-label="Facebook" role="img" viewBox="0 0 512 512">
                    <rect width="512" height="512" rx="15%" fill="#1877f2" />
                    <path d="M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z" fill="#fff" />
                </svg>
            </a>
        </div>
    )
}

export const Instagram = () => {
    return (
        <div className="social-icons">
            <a href="https://instagram.com/deal_buster_hemet?igshid=YmMyMTA2M2Y=">
                <svg className="shadow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-label="Instagram" role="img" viewBox="0 0 512 512">
                    <rect width="512" height="512" rx="15%" id="b" />
                    <use fill="url(#a)" xlinkHref="#b" />
                    <use fill="url(#c)" xlinkHref="#b" />
                    <radialGradient id="a" cx=".4" cy="1" r="1">
                        <stop offset=".1" stopColor="#fd5" />
                        <stop offset=".5" stopColor="#ff543e" />
                        <stop offset="1" stopColor="#c837ab" />
                    </radialGradient>
                    <linearGradient id="c" x2=".2" y2="1">
                        <stop offset=".1" stopColor="#3771c8" />
                        <stop offset=".5" stopColor="#60f" stopOpacity="0" />
                    </linearGradient>
                    <g fill="none" stroke="#fff" strokeWidth="30">
                        <rect width="308" height="308" x="102" y="102" rx="81" />
                        <circle cx="256" cy="256" r="72" />
                        <circle cx="347" cy="165" r="6" />
                    </g>
                </svg>


            </a>


        </div>
    )
}

export const TikTok = () => {
    return (
        <div className="social-icons">
            <a href="https://vm.tiktok.com/TTPd9GQW9c/">
                <svg className="shadow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-label="TikTok" role="img" viewBox="0 0 512 512">
                    <rect rx="15%" height="512" width="512" fill="#fff" />
                    <defs>
                        <path id="t" d="M219 200a117 117 0 1 0 101 115v-128a150 150 0 0 0 88 28v-63a88 88 0 0 1-88-88h-64v252a54 54 0 1 1-37-51z" />
                    </defs>
                    <use href="#t" fill="#f05" x="18" y="15" />
                    <use href="#t" fill="#0ee" />
                </svg>
            </a>
        </div>
    )
}