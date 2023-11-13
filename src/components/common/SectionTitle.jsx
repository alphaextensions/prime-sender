import React from "react";
import '../../styles/Common/sectionTitle.css'

const SectionTitle = ({ id, gif, title, subtitle, white }) => {
  const titleColor = (white) ? "#f5f5f5" : "#4b4b4b";

  return (
    <div className="section-title-container" id={id}>
      <div className="section-title">
        <img src={gif} alt="GIF" className="title-image" />
        <h1 className="title-text" style={{color: titleColor}}>{title}</h1>
      </div>
      <div className="section-subtitle">
        {subtitle && <p className="sub-title-text">{subtitle}</p>}
      </div>
    </div>
  )
}

export default SectionTitle;