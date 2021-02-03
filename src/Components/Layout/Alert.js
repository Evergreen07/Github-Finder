import React, {useContext} from 'react'
import alertContext from '../../Context/Alert/alertContext'

function Alert() {
    const context = useContext(alertContext);
    
    const {alert} = context;
    
    return (
        alert !== null && (
            <div className = {`alert ${alert.type}`}>
                <i className = "fas fa-info-circle"/> &nbsp; {alert.msg}
            </div>
        )
    )
}

export default Alert
