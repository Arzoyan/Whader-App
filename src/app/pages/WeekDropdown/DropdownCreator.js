import React from 'react';
import "./index.css";
import calendar from "../../../img/calendar.png"

const DropdownCreator = (props) => {
    const { day, loadCustomData, className } = props;

    return <>
        <div className={`week ${className}`} onClick={() => loadCustomData(day)} > {day} <img className="calendar" src={calendar}/> </div>
    </>
}

export default DropdownCreator
