

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TextInput,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

class App extends React.Component {
  
  
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
          {/* <ImageBackground style={styles.Container} source={require('./assets/background.jpg')}> */}
            <MainPart />
          {/* </ImageBackground> */}
        
      </>
    )
  }
}

class MainPart extends React.Component {
  state={
    screenWidth: null,
    screenHeight: null,
  }

  _onLayout(e) {
    console.log("Screen Orientation Changed...")
    this.setState({
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height
    })

  }
  render(){
    const {screenHeight, screenWidth} = this.state
    return(
      <SafeAreaView style={screenHeight > screenWidth ? styles.ContainerPortrait : styles.ContainerLandscape} onLayout={this._onLayout.bind(this)}>
       
        <View>
          <TextInput style={styles.TextInput} placeholder="Email Address" />
          <TextInput style={styles.TextInput} placeholder="Password" />
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    )
  }
  
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,

  },
  ContainerPortrait: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ContainerLandscape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  LogoImage: {
    width: 200,
    height: 200,
    margin: 30,
    marginBottom: 10,
    
  },
  TextInput: {
    width: 240,
    height: 48,
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 16,
    padding: 10,
  },
  Button: {
    width: 240,
    fontSize: 16,
    backgroundColor: 'rgba(200, 200, 200, 0.8)',
    padding: 10,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center'

  },
  ButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default App;
