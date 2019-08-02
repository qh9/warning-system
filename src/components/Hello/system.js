import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class System extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.system'})}
        </span>
    )
}
}

export default System;