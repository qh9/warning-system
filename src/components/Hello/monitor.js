import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Monitor extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.monitor'})}
        </span>
    )
}
}

export default Monitor;