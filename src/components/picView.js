import React from 'react'

const RenderPicture = (props) => {
  return (
    <div style={picView}>
    <p> this is where the pic will go </p>
    </div>
  )
}

const picView = {
  width: '400px',
  height: '400px',
  border: '1px solid black',
  padding: '10px'
}

export default RenderPicture
