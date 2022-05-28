import React, {useState, useRef, useContext, useEffect} from 'react';
import {ImageBackground, View, Image, StatusBar} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export default function Splash({navigation}) {
    const checkToken = async () => {
        console.log('fcmToken::->');

       }
    const chklogin = async () =>{

        const uid =await  AsyncStorage.getItem("u_id");
      //  console.log('uid',uid)
        if(uid != null){
            const is_update =await  AsyncStorage.getItem("is_update");
            const is_member =await  AsyncStorage.getItem("is_member");
            if( is_update == 0){
                navigation.navigate('Profiledetail')
            }else{
                if( is_member == 1){
                    navigation.navigate('HOME')

                }else{
                    navigation.navigate('Membership')
                }

            }
        }else{
         navigation.navigate('Onbording')
        }
    }

    useEffect(() => {
        checkToken();
        setTimeout(() => {
            chklogin(); 
        },3000)
    })
    
    return(
        <View style={style.viewStyle}>
            <ImageBackground source={require('../../Assets/logo/background.png')} style={style.backgroundImage} >
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor="transparent" />
                    <SafeAreaView>
                        <Image style={style.imgStyle} source={require('../../Assets/logo/favicon.png')}/>
                        <Image style={style.imgStyle1} source={require('../../Assets/logo/plus602.png')}/>
                    </SafeAreaView>
            </ImageBackground>
        </View>
    )
}