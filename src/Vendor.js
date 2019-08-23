import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button ,ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class Vendor extends Component {
  state = {
    prodDetails: []
  };


 

  render() {
    return (
      
      <View style={styles.container}> 

        <View style={styles.midCont}>
          <View style={styles.viewItem}>
          <TextInput 
              style={{borderRadius: 10, borderWidth: 1, height: 100, width: 100, padding: 5}}
              placeholder='Profile Picture'
            />
             <Text style={styles.textStyle}>
              Vendor Name
            </Text>
            
            <Text style={styles.textStyle}>
              Address
            </Text>
           
            <Text style={styles.textStyle}>
             Rating
            </Text>
            <Button
            title='Follow'
            color='purple'
            />

          </View>

          <View style={styles.viewProd}>
          <Text style={styles.textStyle}>
                Products
              </Text> 
          </View>
          

          <ScrollView >
              
          <Text style={styles.textStyle}>
                Products
              </Text> 
              <Text style={styles.textStyle}>
                Products
              </Text> 
              <Text style={styles.textStyle}>
                Products
              </Text> 
            
            </ScrollView> 

          
            </View>
        

      </View>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'#fff',
    justifyContent: 'flex-start',
    height: '100%',
    paddingTop: 24
  },

  header: {
    padding: 0,
    backgroundColor: '#BA55D3',
    width: 420,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderWidth: 1,
    height: '10%'

  },
  midCont: {
    height:'80%',
    flexDirection: 'column',
    padding:5,
  },
  viewProd: { 
    flexDirection:'row',
    alignItems: 'flex-start', 
    width:'100%', 
    backgroundColor: 'grey',
    
  },

  textStyle:{
    fontSize: 20,
    padding: 5
  },
  
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    padding: 10,
    
  },

  viewItem: {
    flexDirection: 'column',
    padding:5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },


  viewButton: {
    height: '10%'
  },
  buttonSize: {
    width: 50
  },

  footer: {
    backgroundColor: '#BA55D3',
    width: 420,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: 'black',
    borderWidth: 1,
    height:'10%'
    
  }
 
  
});
