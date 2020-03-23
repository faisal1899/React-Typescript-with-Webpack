import * as React from 'react';

export interface AppProps {
  appName: string;
  appId: number;
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        <h3>My App</h3>
        <span>App Name = {this.props.appName}</span>
        <span>App ID = {this.props.appId}</span>
      </div>
    );
  }
}