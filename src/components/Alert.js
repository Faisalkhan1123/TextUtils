import React from 'react'

function Alert(props) {
const capitalise=(word)=>{
    let newtext=word.slice(0,1).toUpperCase();
    return newtext+word.slice(1);
}
  return (
    <div style={{height: '50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg} 
    </div>}
    </div>
  )
}

export default Alert
