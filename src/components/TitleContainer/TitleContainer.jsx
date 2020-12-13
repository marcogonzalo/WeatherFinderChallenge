import React from "react";
import PropTypes from 'prop-types';
import "./TitleContainer.css";

function TitleContainer({ title, subtitle }) {
    return (
        <div className="col-5 title-container">
            <div>
                <h1 className="title-container__title">{title}</h1>
                <h3 className="title-container__subtitle">{subtitle}</h3>
            </div>
        </div>
    );
}

TitleContainer.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

export default TitleContainer;
