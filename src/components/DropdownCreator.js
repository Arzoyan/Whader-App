import React from 'react';

const DropdownCreator = (props) => {
    const { day, loadCustomData, showCurrentData } = props;

    return < >
        <span onClick={() => loadCustomData({ day })} > {day}</span>
        {
            showCurrentData ? <ul>
                {
                    showCurrentData.map(data => {
                        return <li key={"555" + data}>

                        </li>
                    })
                }
            </ul> : null
        }
    </>

}

export default DropdownCreator
