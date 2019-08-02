import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Name extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.name'})}
        </span>
    )
}
}

export default Name;