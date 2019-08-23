import React from  'react';
import { View , Text, Button } from 'react-native';


export default class Welcome extends React.Component{

    render(){
        return(
            <View>
                <Text>Welcome</Text>
                <Button title='Login' onPress={()=>this.props.navigation.navigate('Vendor')}></Button>
                <Button title='Sign Up' onPress={()=>alert('Sign up button pressed')}></Button>
            </View>
        );
    }

}