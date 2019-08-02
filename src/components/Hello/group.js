import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Group extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.group'})}
        </span>
    )
}
}

export default Group;