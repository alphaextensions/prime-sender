import React from 'react';
import '../../styles/Common/slider.css'

export default function Slider({ onTextHeader, offTextHeader, onTextValue, offTextValue, setValue, style }) {
  return (
    <div className="slider" style={style}>
      <span className="slider-text heading">{onTextHeader} <span className='text-bold'>{onTextValue}</span></span>
      <label className="switch-container">
        <input type="checkbox" onChange={e => setValue()} defaultChecked />
        <span className="switch" />
      </label>
      <span className="slider-text heading">{offTextHeader} <span className='text-bold'>{offTextValue}</span></span>
    </div>
  );
}
