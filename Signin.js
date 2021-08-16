import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';


export default function Signin() {
  const [value, setText] = React.useState({user_name:"", user_age:"", user_contact:""})  
  

  return (      
      <View style={styles.container}>
          <Text>정보를 입력해주세요</Text>
          <Image source={{ uri : "https://static.vecteezy.com/system/resources/thumbnails/000/335/693/small/vegan_icon.jpg"}} style = {styles.logo} />                      
          이름 : <TextInput
          style = {styles.info1_input}
          onChangeText = {text => setText({ ...value,user_name : text})}
          value = {value.user_name}
          />                   
          나이 : <TextInput
          style = {styles.info1_input}
          onChangeText = {text => setText({ ...value,user_age : text})}
          value = {value.user_age}
          />               
          연락처 : <TextInput
          style = {styles.info1_input}
          onChangeText = {text => setText({ ...value,user_contact : text})}
          value = {value.user_contact}
          />               
          <Text>
            {value.user_name} {value.user_age} {value.user_contact}
          </Text>
          <StatusBar style="auto" />             
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo : {
      height : 160,
      width : 160
    },
    info1_input : {
      height : 40, borderColor : "green", borderWidth : 1      
    }
  });
  