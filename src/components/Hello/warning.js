import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Warning extends React.Component{
   render(){
    return (
        <div>
            {formatMessage({id:'app.warning'})}
        </div>
    )
}
}

export default Warning;