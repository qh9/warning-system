import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Hello extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.hello'})}
        </span>
    )
}
}

export default Hello;