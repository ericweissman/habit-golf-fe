import React from 'react';
import ReactLoading from 'react-loading'

const Loading = ({type}) => {
  return(
    <ReactLoading type={type} color="#FEE715" height={135} width={135}/>
  )
}

export default Loading;