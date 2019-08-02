import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Accountmanage extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.accountmanage'})}
        </span>
    )
}
}

export default Accountmanage;