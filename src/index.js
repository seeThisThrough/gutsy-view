import React from 'react';
import ReactDOM from 'react-dom';
import RenderPicture from './components/picView.js';
import TitleView from './components/titleView.js'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0
    }
  }
  
  render() {
    return (
      <div className='main' style={mainView}>
      <div style={picTitleView}>
        <RenderPicture/> <TitleView/>
      </div>
      <button id="book" style={button}>Book Now</button>
      </div>
    )
  }
}
  const picTitleView = {
    display: 'flex',
    flexDirection: 'row'
  }
  const mainView = {
    margin: '10px',
    border: '2.5px solid black',
    borderHeight: '5px',
    padding: '20px',
  }
  const button = {
    margin: '10px',
    backgroundColor: 'black',
    borderColor: 'white',
    borderRadius: '5px',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 5,
    width: '400px'

  }

ReactDOM.render(<App/>, document.getElementById('app'));

export default App