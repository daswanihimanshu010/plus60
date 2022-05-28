import React, {useState, useRef, useContext, useEffect} from 'react';
import {Alert, View,Text, StyleSheet, StatusBar,TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {style} from './style'
import {RNCamera} from 'react-native-camera';
import Icons from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Recorder({navigation}) {
    const camera  = useRef();
    const [record, setrecord] = useState(false);
    const [isrecord, setisrecord] = useState(0);
    const [cametype, setcamtype] = useState(RNCamera.Constants.Type.front);
    const [cametypechk, setcamtypechk] = useState(1);
    const [icon, seticon] = useState('controller-record');
    const [recorddata, setrecorddata] = useState('');

    const submit = async () => {
        //console.log('submit::',recorddata);
       navigation.navigate('Humanbookcreate')
    }
        const flip = async () => {
        if(cametypechk == 0 ){
            setcamtype(RNCamera.Constants.Type.front);
            setcamtypechk(1)
        }
        if(cametypechk == 1){
            setcamtype(RNCamera.Constants.Type.back);
            setcamtypechk(0)
        }
    }
        const STOP = async () => {
        setisrecord(2)
        camera.current.stopRecording();
      }
      const  takePicture = async () => {
        setisrecord(1)
        seticon('controller-stop');
          let options = {
            quality: 0.85,
            fixOrientation: true,
            forceUpOrientation: true,
          };
    
          try {
            const data = await camera.current.recordAsync();
              console.info('url',data.uri);
             [global.vediouri = data.uri]
             [global.vediouritxt = data.uri]

              
           // Alert.alert('Success', JSON.stringify(data));
          } catch (err) {
            Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
            return;
          } finally {
          }
      };

    return( 
        <View style={style.viewStyle}>
             <RNCamera 
                ref={camera}
                captureAudio={true}
                style={{flex: 1}}
                type={cametype}
                androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
                }}
                >
                 
                <View  style={styles.btnAlignmentcross}  >
                <TouchableOpacity  onPress={()=> navigation.navigate('Humanbookcreate')} >
                <FontAwesome name='remove' size={moderateScale(40)} color="#fff" />
                </TouchableOpacity>
                </View>


    <View  style={styles.btnAlignment}  >
        <TouchableOpacity
            onPress={()=> flip()}
        >
           <Ionicons name='camera-reverse' size={moderateScale(40)} color="#fff" />
         </TouchableOpacity>
         { isrecord == 1 ? (
             <TouchableOpacity  onPress={()=> STOP()}>
             <Icons name='controller-stop' size={moderateScale(80)} color="#f20505" />
           </TouchableOpacity>
         ): null }
        { isrecord == 2 ? (
             <TouchableOpacity  onPress={()=> takePicture()}>
             <Icons name='controller-record' size={moderateScale(80)} color="#f20505" />
           </TouchableOpacity>
         ): null }
        { isrecord == 0 ? (
             <TouchableOpacity  onPress={()=> takePicture()}>
             <Icons name='controller-record' size={moderateScale(80)} color="#f20505" />
           </TouchableOpacity>
         ): null }
         
         <TouchableOpacity
             onPress={()=> submit()}
            >
            { isrecord == 2 ? ( 
                <FontAwesome name='check' size={moderateScale(40)} color="#fff" />
            ): null }

         </TouchableOpacity>
    </View>
        
       </RNCamera>
        </View>
    )
}
const styles = StyleSheet.create({
    btnAlignmentcross: {
        flex: 1,
        flexDirection:'row',
        marginTop: moderateScale(25),
        marginRight: moderateScale(8),
        justifyContent:'flex-end',
      },
    btnAlignment: {
       flex: 1,
       flexDirection:'row',
       alignItems:'flex-end',
       marginBottom: moderateScale(20),
       justifyContent:'space-around',
     },
 });