import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Usermanage extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.usermanage'})}
        </span>
    )
}
}

export default Usermanage;