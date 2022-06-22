import React, {useState, useRef, useContext, useEffect} from 'react';
import {ImageBackground, View,Text, Image,ActivityIndicator,Modal, StatusBar,ToastAndroid,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../server/config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {style} from './style';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import {getUniqueId} from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';

export default function Otpverify({navigation,route}) {
    const [otp, setotp] = useState('');
  const [showModal, setShowModal] = useState(false);

    const devicetokenupdate = async () =>{
       
        const fcmToken = await messaging().getToken();
          
        const uid =await  AsyncStorage.getItem("u_id");       
        var formdata = new FormData();
        formdata.append("device_token", getUniqueId());
        formdata.append("fcm_token", fcmToken);
        formdata.append("member_id", uid);
        formdata.append("act", "device_token");
        var requestOptions = {
        method: 'POST',
        body: formdata,
        };
        fetch(config.serverURL, requestOptions)
        .then(response => response.json())
        .then(responseJson =>{
        console.log('token update')
        })
        
    }
    const Otpverify = async () =>{
        const u_mo =route.params.phone;
        console.log('mo',u_mo);
       
        if (!otp.trim()) {
            ToastAndroid.show("Please enter otp",ToastAndroid.SHORT);
            return;
        }
        setShowModal(true)
          
          var formdata = new FormData();
          formdata.append("otp", otp);
          formdata.append("mobile_no", u_mo);
        formdata.append("act", "otp_verify");
        var requestOptions = {
        method: 'POST',
        body: formdata,
      };
      fetch(config.serverURL, requestOptions)
      .then(response => response.json())
        .then(responseJson =>{
            console.log('responseJson.status',responseJson.status)
            if(responseJson.status == 1){
                setShowModal(false)

                    AsyncStorage.setItem('u_id',String(responseJson.data.member_id));
                    AsyncStorage.setItem('u_fullname',String(responseJson.data.member_name));
                    AsyncStorage.setItem('u_email',String(responseJson.data.member_email));
                    AsyncStorage.setItem('u_mo',String(responseJson.data.member_mob));
                    AsyncStorage.setItem('u_img',String(responseJson.data.member_img));
                    AsyncStorage.setItem('is_update',String(responseJson.data.is_updated));
                    AsyncStorage.setItem('is_member',String(responseJson.data.is_membership));
                    devicetokenupdate();
                    if(responseJson.data.is_updated == 0){

                        navigation.navigate('Profiledetail')
                    }else{
                        if( responseJson.data.is_membership == 1){
                            navigation.navigate('HOME')
        
                        }else{
                            navigation.navigate('Membership')
                        }
                    }
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
            }else{
                setShowModal(false)

                ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
            }
      })

        
    }
    
    return(
            <ImageBackground source={require('../../Assets/logo/background.png')} style={style.backgroundImage} >
                <Modal
                transparent={true}
                visible={showModal}
                animationType={'slide'}
                animationIn="slideInLeft"
                    >
                    <View  style={style.modal}>
                        <View  style={style.modalInner}>
                            <ActivityIndicator size="large" animating={showModal} color={colors.Golden}/>
                        </View>
                    </View>
                </Modal>
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor="transparent" />
                    <SafeAreaView>
                        <View style={style.stylelogo}>
                            <Image style={style.imgStyle} source={require('../../Assets/logo/favicon.png')}/>
                            <Image style={style.imgStyle1} source={require('../../Assets/logo/plus602.png')}/> 
                        </View>
                        <View style={style.wrapp}>
                            <View style={style.headerstyle}>
                                <Text style={style.txtstyle1}>{'OTP verification'}</Text>
                            </View>
                            <View style={style.field}>
                            <Text style={style.txtstyle2}>{'Enter 4 digit otp'}</Text>
                                
                            <OTPInputView
                            style={style.otp}
                            onCodeChanged={code => setotp(code)}

                            pinCount={4}
                            autoFocusOnLoad
                            codeInputFieldStyle={style.underlineStyleBase}
                            codeInputHighlightStyle={style.underlineStyleHighLighted}
                           
                        />
                                    <TouchableOpacity style={style.btn} onPress={()=>Otpverify()}>
                                        <Text style={style.txtstyle3}>{'Verify & Login'}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  onPress={()=>navigation.navigate(route.params.path)} style={style.btnback}>
                                        <AntDesign name='arrowleft' size={moderateScale(25)} color={colors.Golden} />
                                    </TouchableOpacity>
                                
                            </View>
                            

                        </View>
                    </SafeAreaView>
            </ImageBackground>
    )
}