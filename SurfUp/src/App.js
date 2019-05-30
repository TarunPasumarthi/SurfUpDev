import React from 'react';
import {View, Image, Button} from 'react-native';
/*import { createStackNavigator, createAppContainer } from "react-navigation";*/

import LoadingScreen from './LoadingScreen';
import LoginScreen from './LoginScreen';

/*const AppNavigator = createStackNavigator(
  {
    Load: LoadingScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Load"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}*/

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     component : <LoadingScreen/>
    }
   }
  componentDidMount(){
    this.timeoutHandle = setTimeout(()=>{
         this.setState({ component: <LoginScreen/> })
    }, 1000);
  }

  componentWillUnmount(){
      clearTimeout(this.timeoutHandle); 
  }
  render() {
    return (
      this.state.component
    );
  }
}
