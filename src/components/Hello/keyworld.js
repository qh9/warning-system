import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Keyworld extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.keyworld'})}
        </span>
    )
}
}

export default Keyworld;