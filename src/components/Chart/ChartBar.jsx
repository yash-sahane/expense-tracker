import React from 'react'
import './chartBar.css'

const ChartBar = (props) => {

    const { label, value, maxValue } = props

    let barFilledHeight = 0;
    if (maxValue > 0) {
        barFilledHeight = Math.round((value / maxValue) * 100);
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barFilledHeight }}></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    )
}

export default ChartBar