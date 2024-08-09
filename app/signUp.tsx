import React, { useState } from 'react';
import { View,Text,StyleSheet,Button,TouchableOpacity,Alert,Image,TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';

export default function index (){
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    return (
     <View style={styles.container}>
    
      <Image style={styles.homeImg}
          
              source={(require('@/assets/images/Register.jpeg'))}
         />

         <Text style={styles.nametext}>Register Now</Text>
        
         <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your Name ...."
          value={text}
          onChangeText={setText}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your Email ......"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Password ....."
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Conform Password .."
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
        
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
          <Link href="/dashboard" style={styles.buttonText}>Get Started</Link>
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
      top:-180,
      fontSize: 60,
      textAlign: 'center',
      fontFamily:'Regular',
    },
  
    button: {
      top:-60,
      backgroundColor: '#00FF85',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 7,
      left:20
    },

    buttonText: {
      color: 'white',
      fontSize: 22,
      fontFamily:'Gurajada',
      textAlign: 'center',
    },

    homeImg:{
      width:1000,
      height:250,
      top:-100,
      borderRadius: 7,
    },

    input: {
      position:'relative',
      height: 40,
      borderColor: 'gray',
      borderWidth: 2,
      marginBottom: 18,
      paddingHorizontal: 100,
      borderRadius: 7,
      top:-100,
      right:80
      
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 18,
    },

    icon: {
      position:'relative',
      borderColor: 'gray',
      marginBottom: 15,
      paddingHorizontal: 100,
      top:-100,
      left:80 
    },
   

  })

