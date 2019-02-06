import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Mike Janes app';

class App extends React.Component {
  render() {
    return (
      <div>{title}</div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

module.hot.accept();