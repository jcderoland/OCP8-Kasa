import React, { useState } from "react";

function Collapse({ title, content }) {
    const [isVisible, setVisibility] = useState(false);

    return (
        <div className="collapseBtn&Content">
            <div className="toggleBar" onClick={() => setVisibility((prev) => !prev)}>
                <button className="collapseBtn">
                    {title}
                </button>
                <p className="toggleArrow">
                    <i className={`fa-solid fa-angle-up ${isVisible ? "rotated" : ""}`} style={{ color: "#ffffff" }}></i>
                </p>
            </div>
            <div className={`collapseContent ${isVisible ? "active" : ""}`}>
                {content}
            </div>
        </div>
    );
}

export { Collapse };
