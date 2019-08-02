import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Gather extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.gather'})}
        </span>
    )
}
}

export default Gather;