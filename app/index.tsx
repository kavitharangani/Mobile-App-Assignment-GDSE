import React from 'react'
import { View,Text,StyleSheet,Button,TouchableOpacity,Alert,Image,TextInput } from 'react-native'
import { Link } from 'expo-router';

export default function index (){
    return (
     <View style={styles.container}>
    
      <Image style={styles.homeImg}
          
              source={(require('@/assets/images/home.jpeg'))}
         />

         <Text style={styles.nametext}>WELCOME !</Text>
         <Text style={styles.entertext}>Join us online app...</Text>
        
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
             <Link href="/Home" style={styles.buttonText}>Get Started</Link>
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
      top:10,
      fontSize: 70,
      textAlign: 'center',
      fontFamily:'Material Icons',
    },
    entertext: {
      top:10,
      fontSize: 20,
      marginBottom: 40,
      textAlign: 'center',
      fontFamily:'Inria Serif'
    },
    button: {
      top:3,
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
    homeImg:{
      width:300,
      height:300,
      top:5,
      borderRadius: 7,
    }
    
    

  })

