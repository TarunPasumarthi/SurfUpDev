import React from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class LoginScreen extends React.Component {

  state = {
      email: '',
      password: '',
      helpClicked:false
  }

  handleEmail = (text) => {
      this.setState({ email: text })
  }
  handlePassword = (text) => {
      this.setState({ password: text });
  }
  login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
  }

  render() {
    if(!this.state.helpClicked){
      return(
        <View style={{ flex: 1, justifyContent:'space-evenly'}}>
  
          <View style={styles.help}>
            <Button
              title="HELP"
              onPress={() => this.setState({helpClicked:true})}
            />
          </View>
  
          <View style={{flex: 3, alignItems: 'center', justifyContent:'center'}} >
            <Image source={require('./assets/logo.png')}/>
          </View>
  
          <View style={{flex: 3, justifyContent:'space-evenly'}} >
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Email"
              autoCapitalize = "none"
              onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Password"
              autoCapitalize = "none"
              onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
              style = {styles.submitButton}
              onPress = {
                  () => this.login(this.state.email, this.state.password)
              }>
              <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style = {styles.fbButton}
              onPress = {
                  () => this.login(this.state.email, this.state.password)
              }>
              <Text style = {styles.submitButtonText}> Login With Facebook </Text>
            </TouchableOpacity>
          </View>
  
          <View style={{flex: 1}} ></View>
        </View>
      );
    }
    else{
      return(
        <View style={{ flex: 1, justifyContent:'space-evenly'}}>
  
          <View style={styles.help}>
            <Button
              title="HELP"
              onPress={() => this.setState({helpClicked:false})}
            />
          </View>
  
          <View style={{flex: 3, alignItems: 'center', justifyContent:'center'}} >
            <Image source={require('./assets/logo.png')}/>
          </View>
        
          <View style={{flex: 4}} ></View>
        </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  help:{
    flex: 1,
    alignItems:'flex-start',
    justifyContent:'center',
    marginHorizontal:15
  },
  input: {
     marginHorizontal: 15,
     height: 50,
     borderColor: '#0099ff',
     borderWidth: 2
  },
  submitButton: {
     backgroundColor: '#0099ff',
     justifyContent: 'center',
     marginHorizontal: 15,
     height: 50,
     alignItems: 'center'
  },
  fbButton: {
    backgroundColor: '#3157b5',
    justifyContent: 'center',
    marginHorizontal: 15,
    height: 50,
    alignItems: 'center'
 },
  submitButtonText:{
     color: 'white'
  }
})