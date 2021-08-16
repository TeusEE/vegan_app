import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ReactDOM from "react-dom";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Imagepick() {
    const [selectedImage, setSelectedImage] = React.useState(null)
    
    let openImagePickerAsnyc = async()=>{
        let  permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()        
        if (permissionResult == false){
            alert("permission denied")
            return false
        }

        let pickResult = await ImagePicker.launchImageLibraryAsync()       
        if (pickResult.cancelled == true){
            return -1
        } 
        setSelectedImage({ localUri : pickResult.uri })
    }
    
    
    if (selectedImage !== null) {
        return (
            <View style={styles.container}>
            <Image
                source={{ uri: selectedImage.localUri }}
                style={styles.thumbnail}
            />
            </View>
        );
      }
    

    return (
    <View style={styles.container}>
        <TouchableOpacity
            onPress={openImagePickerAsnyc}
            style={{ backgroundColor: 'green' }}>
            <Text style={{ fontSize: 20, color: '#fff' }}>Trinity Force</Text>
        </TouchableOpacity>
    </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'up',
    },    
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain"
    },
  });
  