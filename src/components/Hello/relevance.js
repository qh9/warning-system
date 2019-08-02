import React from 'react';
// import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Relevance extends React.Component{
   render(){
    return (
        <span>
            {formatMessage({id:'app.relevance'})}
        </span>
    )
}
}

export default Relevance;