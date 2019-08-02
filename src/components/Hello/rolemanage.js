import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Rolemanage extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.rolemanage'})}
        </span>
    )
}
}

export default Rolemanage;