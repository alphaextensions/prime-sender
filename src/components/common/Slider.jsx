import React from 'react';
import '../../styles/common/slider.css'

export default function Slider({ onTextHeader, offTextHeader, onTextValue, offTextValue, setValue, planPeriod ,style }) {
  return (
    <div className="slider" style={style}>
      <span className={`slider-text heading ${planPeriod=='monthly' ? 'text-primary' : ''}`}>{onTextHeader} <span className='text-bold'>{onTextValue}</span></span>
      <label className="switch-container">
        <input type="checkbox" onChange={e => setValue()} defaultChecked />
        <span className="switch" />
      </label>
      <span className={`slider-text heading ${planPeriod!='monthly' ? 'text-primary' : ''}`}>{offTextHeader} <span className='text-bold'>{offTextValue}</span></span>
    </div>
  );
}
