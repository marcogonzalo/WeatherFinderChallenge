import React from "react";
import "./TitleContainer.css";

function TitleContainer(props) {
    return (
        <div className="col-5 title-container">
            <div>
                <h1 className="title-container__title">Weather Finder</h1>
                <h3 className="title-container__subtitle">
                Find out temperature, conditions and more...
                </h3>
            </div>
        </div>
    );
}

export default TitleContainer;
