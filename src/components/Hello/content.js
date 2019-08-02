import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Contentlang extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.content'})}
        </span>
    )
}
}

export default Contentlang;