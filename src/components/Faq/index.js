import React from "react";
// style sheet
import './index.css';

export const Faq = () => {


    return (
        <div id="faq">
            <h1>Frequently Asked Questions</h1>
            <h3>What do we sell?</h3>
            <p>We sell a variety of overstock and returns from major retailers.</p>
            <h3>Can I return or exchange stuff I bought?</h3>
            <p>No returns or exchanges</p>
            <h3>What forms of Payment do you accept?</h3>
            <p>We accept Cash, Credit, Debit, Apply Pay. We do not accept checks.</p>
            <h3>What are your hours?</h3>
            <p id="hours">
                <li>Friday 9am-8pm</li>
                <li>Saturday 9am-8pm</li>
                <li>Sunday 10am-7pm</li>
                <li>Monday 9am-8pm</li>
                <li>Tuesday 9am-8pm</li>
                <li>Wednesday 9am-8pm</li>
                <li>Thursday CLOSED</li>
            </p>
        </div>
    )
}