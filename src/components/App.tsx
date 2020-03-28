import * as React from 'react';

export interface IAppProps {
  appName: string;
  appId: number;
}

function test() {
  const arr = [];
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
  arr.push(2);
}

export class App extends React.Component<IAppProps, {}> {
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