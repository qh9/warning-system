import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Groupmanage extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.groupmanage'})}
        </span>
    )
}
}

export default Groupmanage;