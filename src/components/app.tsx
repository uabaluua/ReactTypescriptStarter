import * as React from 'react';
import { Content } from './content';
import './style.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Start</h1>
        <Content />
      </div>
    );
  }
}
