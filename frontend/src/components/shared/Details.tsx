import React, { useState } from 'react';

const Details: React.FC = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const cardStyles: React.CSSProperties = {
    margin: '40px',
    position: 'relative',
    width: '300px',
    height: '200px',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    perspective: '1000px',
    boxShadow: '0 0 0 5px #ffffff80',
    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  };

  const svgStyles: React.CSSProperties = {
    width: '48px',
    fill: '#333',
    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  };

  const contentStyles: React.CSSProperties = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#f2f2f2',
    transformOrigin: 'bottom',
    transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  };

  const titleStyles: React.CSSProperties = {
    margin: '0',
    fontSize: '20px',
    color: '#333',
    fontWeight: 700,
    textAlign: 'center',
  };

  const descriptionStyles: React.CSSProperties = {
    margin: '10px 0 0',
    fontSize: '14px',
    color: '#777',
    lineHeight: '1.4',
    textAlign: 'center',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={cardStyles}
        className="card"
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={svgStyles}>
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
        </svg>
        <div style={{ ...contentStyles, transform: isHovered1 ? 'rotateX(0)' : 'rotateX(-90deg)' }} className="card__content">
          <p style={titleStyles} className="card__title">Symptom Assessment</p>
          <p style={descriptionStyles} className="card__description">Describe your symptoms, and our chatbot will assist you in evaluating them.</p>
        </div>
      </div>

      <div
        style={cardStyles}
        className="card"
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={svgStyles}>
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
        </svg>
        <div style={{ ...contentStyles, transform: isHovered2 ? 'rotateX(0)' : 'rotateX(-90deg)' }} className="card__content">
          <p style={titleStyles} className="card__title">Check Symptoms</p>
          <p style={descriptionStyles} className="card__description">Get information about symptoms and possible conditions.</p>
        </div>
      </div>
      <div
        style={cardStyles}
        className="card"
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={svgStyles}>
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
        </svg>
        <div style={{ ...contentStyles, transform: isHovered3 ? 'rotateX(0)' : 'rotateX(-90deg)' }} className="card__content">
          <p style={titleStyles} className="card__title">Medical Information</p>
          <p style={descriptionStyles} className="card__description">Access reliable medical information and resources.</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
