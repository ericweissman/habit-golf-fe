import React from 'react';
import ReactLoading from 'react-loading'

const Loading = ({type}) => {
  return(
    <ReactLoading type={type} color="#fff"/>
  )
}

export default Loading;