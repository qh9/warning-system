import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Monitoring extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.monitoring'})}
        </span>
    )
}
}

export default Monitoring;