import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Feature extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.feature'})}
        </span>
    )
}
}

export default Feature;