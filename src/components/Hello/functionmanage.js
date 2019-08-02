import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Functionmanage extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.functionmanage'})}
        </span>
    )
}
}

export default Functionmanage;