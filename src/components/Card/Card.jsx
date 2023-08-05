import React from 'react';
import '../Card/card.css';

const Card = ({ vidSrc, imgSrc, imgAlt, title, description, buttonText, link }) => {
    return (
        <div className="card">
            {vidSrc ? (
            <div className="card-video">
                <iframe
                width="100%"
                height="100%"
                src={vidSrc}
                title="Video"
                frameBorder="0"
                allowFullScreen
                ></iframe>
            </div>
            ) : (
            <img src={imgSrc} alt={imgAlt} className="card-img" />
            )}
            <div className="card-content">
            {title && <h3 className="card-title">{title}</h3>}
            <p className="card-desc">{description}</p>
            <a href={link} className="card-btn">
                {buttonText}
            </a>
            </div>
        </div>
        );
    };

export default Card;