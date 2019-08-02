import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Overall extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.overall'})}
        </span>
    )
}
}

export default Overall;