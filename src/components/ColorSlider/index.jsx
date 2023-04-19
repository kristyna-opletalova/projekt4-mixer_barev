import React from "react";

const ColorSlider = ({value, baseColor, colorName, onValueChange}) => {
    return (<>
        <label htmlFor={baseColor}>{colorName}</label>
        <input
            type="range"
            className={`slider slider--${baseColor}`}
            id="redSlider"
            min="0"
            max="255"
            value={value}
            onChange={(e) => {
                onValueChange(e.target.value);
            }}
        />
    </>);
};

export default ColorSlider;