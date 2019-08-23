import React from 'react';
import { View,StyleSheet} from 'react-native';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Welcome from './src/welcome';
import About from './src/about';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <AppContainer ></AppContainer> 
      </View>
              
    );
  }
}

 const AppDrawerNavigator= createDrawerNavigator({
  About: {screen: About},
},
{
  initialRouteName: 'About',
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor: '#e91e63',
    inactiveTintColor: '#CCC',
    activeBackgroundColor: '#EEE',
    inactiveBackgroundColor: '#FFF',
  }
}
  );


const AppSwitchNavigator= createSwitchNavigator({
  Welcome: { screen: Welcome},
  About: { screen: AppDrawerNavigator},

});


const AppContainer= createAppContainer(AppSwitchNavigator);



const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});

