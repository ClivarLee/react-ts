import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { Button } from 'antd';
import './App.css';

const { Link, Route } = ReactRouterDom;

class App extends React.Component {
  render() {
    // tslint:disable-next-line:no-console
    console.log(process.env.NODE_ENV, process.env.CLIENT_ENV);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button size="large">测试sss</Button>
        <Link to="/hello">跳转</Link>
        <Route
          path="/test"
          render={({ history, location, match }) => {
            return (
              <div>
                测试连接
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
