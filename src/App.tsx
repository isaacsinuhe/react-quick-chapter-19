import * as React from 'react'
import Password from './components/password'
import './App.css';

export interface AppProps {}
export interface AppState {}
export default class App extends React.Component<AppProps, AppState> {
  render () {
    return (
      <Password
        upperCase={true}
        lowerCase={true}
        special={true}
        number={true}
        over6={true} 
      />
    )
  }
}