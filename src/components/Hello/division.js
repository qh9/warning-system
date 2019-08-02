import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Division extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.division'})}
        </span>
    )
}
}

export default Division;