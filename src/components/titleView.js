import React from 'react'

const TitleView = (props) => {
  return (
    <div>
      <div style={titleView}>
        <h4>Title:</h4>
        <br/>
        <br/>
        <br/>
        <h4>Description:</h4>
      </div>
      <div style={{marginLeft: '5px'}}>
        <ul>
          <li>Tickets sent via email</li>
          <li>Returns and exchanges accepted</li>
          <li>Exceptions may apply.</li>
        </ul>
      </div>
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
