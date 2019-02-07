import React from 'react'

const TitleView = () => {
  return (
    <div style={titleView}>
      <p>this is the title view</p>
      <p>Description goes here</p>
    </div>
  )
}

const titleView = {
  marginLeft: '10px',
  width: '600px',
  height: '300px',
  border: '1px solid black',
  padding: '10px'
}

export default TitleView
