import React from 'react';
import "./index.css";

const DropdownCreator = (props) => {
    const { day, loadCustomData, className } = props;

    return <>
        <div className={`week ${className}`} onClick={() => loadCustomData(day)} > {day}</div>

    </>
}

export default DropdownCreator
