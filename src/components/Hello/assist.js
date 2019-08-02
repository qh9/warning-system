import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Assist extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.assist'})}
        </span>
    )
}
}

export default Assist;