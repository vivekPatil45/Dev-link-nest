import React from 'react'
import { Tooltip } from 'react-tooltip'

const CardTooltip = ({ theme }) => {
    return (
        <Tooltip
            id="info-tooltip"
            opacity="1"
            className="cardTooltip"
            style={
                theme == 'dark'
                ? { color: '#fff', backgroundColor: '#293242' }
                : {
                    color: '#A1A1A9',
                    backgroundColor: '#f5f3ff',
                    backdropFilter: 'blur(100px)',
                    }
            }
        />
    )
}

export default CardTooltip
