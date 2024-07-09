import React from 'react'
import { View,Text,StyleSheet,Button,TouchableOpacity,Alert,Image,TextInput } from 'react-native'

export default function index (){
    return (
     <View style={styles.container}>
         <Text style={styles.nametext}>WELCOME !</Text>
         <Text style={styles.entertext}>Join us online app...</Text>
        
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
             <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
      </View>
    )
  }

  const styles= StyleSheet.create({
    container: {
      color:'white',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    nametext: {
      top:70,
      fontSize: 70,
      textAlign: 'center',
      fontFamily:'Material Icons',
    },
    entertext: {
      top:70,
      fontSize: 20,
      marginBottom: 40,
      textAlign: 'center',
      fontFamily:'Inria Serif'
    },
    button: {
      top:100,
      backgroundColor: '#00FF85',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 7,
    },
    buttonText: {
      color: 'white',
      fontSize: 22,
      fontFamily:'Gurajada',
      textAlign: 'center',
    },
  })

