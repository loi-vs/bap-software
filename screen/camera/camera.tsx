import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, PermissionsAndroid, View, Image, Text, TouchableOpacity } from 'react-native';
import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';


const Camera = () => {
    const [cameraPhoto, setCameraPhoto] = useState<any | null>(null);
    const [galleryPhoto, setGalleryPhoto] = useState<any | null>(null);

    let options: CameraOptions = {
        mediaType: 'photo',
        saveToPhotos: true
    };

    const openCamera = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(options);
            const assets = result.assets ?? [];
            if (assets.length > 0) {
                setCameraPhoto(assets[0].uri);
            }
        }
    };
    const openGallery = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchImageLibrary(options);
            const assets = result.assets ?? [];
            if (assets.length > 0) {
                setGalleryPhoto(assets[0].uri);
            }
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.iconHead}>
                <TouchableOpacity>
                    <Image resizeMode="contain" style={{}} source={require('./img/exit-icon.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>Bài viết mới...</Text>
                <TouchableOpacity>
                    <Image resizeMode="contain" style={{}} source={require('./img/next-icon.png')} />
                </TouchableOpacity>
            </View>
            <View style= {styles.backGround}>
                {cameraPhoto && (
                    <Image style={{ width: 400, height: 400 }} source={{ uri: cameraPhoto }} />
                )}
            </View>
            <View style={styles.buttom}>
                <Button
                    title='Open Gallery'
                    onPress={openGallery}
                />
                <Button
                    title='Open Camera'
                    onPress={openCamera}
                />
            </View>
            {galleryPhoto && (
                    <Image style={{ width: 300, height: 300 }} source={{ uri: galleryPhoto }} />
                )}
        </View>
    );
}
export default Camera

const styles = StyleSheet.create({
container: {
    flexDirection: 'column',
    justifyContent: 'center'
},
iconHead: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent:'space-between', 
    marginVertical: 30
},
backGround: {
    backgroundColor: '#000000c0', 
    width: 500, 
    height: 400
},
buttom: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginVertical: 30
}
})
