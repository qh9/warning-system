import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Account extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.account'})}
        </span>
    )
}
}

export default Account;