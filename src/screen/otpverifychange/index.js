import React, {useState, useRef, useContext, useEffect} from 'react';
import {ImageBackground, View,Text, Image,TextInput, StatusBar,ToastAndroid,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../server/config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {style} from './style';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Otpverify({navigation,route}) {
    const [otp, setotp] = useState('');

    const Otpverify = async () =>{
        const old = route.params.old;
        const new_n = route.params.new;
      
        if (!otp.trim()) {
            ToastAndroid.show("Please enter otp",ToastAndroid.SHORT);
            return;
        }
          
          var formdata = new FormData();
          formdata.append("otp", otp);
          formdata.append("mobile_old", old);
          formdata.append("mobile_new", new_n);
        formdata.append("act", "change_number");
        var requestOptions = {
        method: 'POST',
        body: formdata,
      };
      fetch(config.serverURL, requestOptions)
      .then(response => response.json())
        .then(responseJson =>{
            console.log('responseJson.status',responseJson.status)
            if(responseJson.status == 1){
                    AsyncStorage.setItem('u_id',String(responseJson.data.member_id));
                    AsyncStorage.setItem('u_fullname',String(responseJson.data.member_name));
                    AsyncStorage.setItem('u_email',String(responseJson.data.member_email));
                    AsyncStorage.setItem('u_mo',String(responseJson.data.member_mob));
                    AsyncStorage.setItem('u_img',String(responseJson.data.member_img));
                    AsyncStorage.setItem('is_update',String(responseJson.data.is_updated));
                    AsyncStorage.setItem('is_member',String(responseJson.data.is_membership));
                    navigation.navigate('profilemenu')
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
            }else{
                ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
            }
      })

        
    }
    
    return(
            <ImageBackground source={require('../../Assets/logo/background.png')} style={style.backgroundImage} >
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor="transparent" />
                    <SafeAreaView>
                        <View style={style.stylelogo}>
                            <Image style={style.imgStyle} source={require('../../Assets/logo/favicon.png')}/>
                            <Image style={style.imgStyle1} source={require('../../Assets/logo/plus602.png')}/> 
                        </View>
                        <View style={style.wrapp}>
                            <View style={style.headerstyle}>
                                <Text style={style.txtstyle1}>{'OTP Verification'}</Text>
                            </View>
                            <View style={style.field}>
                            <Text style={style.txtstyle2}>{'ENTER 4 DIGIT OTP'}</Text>
                                
                            <OTPInputView
                            style={style.otp}
                            onCodeChanged={code => setotp(code)}

                            pinCount={4}
                            autoFocusOnLoad
                            codeInputFieldStyle={style.underlineStyleBase}
                            codeInputHighlightStyle={style.underlineStyleHighLighted}
                           
                        />
                                    <TouchableOpacity style={style.btn} onPress={()=>Otpverify()}>
                                        <Text style={style.txtstyle3}>{'VERIFY & CHANGE NUMBER'}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  onPress={()=>navigation.navigate('changenumber')} style={style.btnback}>
                                        <AntDesign name='arrowleft' size={moderateScale(25)} color={colors.Golden} />
                                    </TouchableOpacity>
                                
                            </View>
                            

                        </View>
                    </SafeAreaView>
            </ImageBackground>
    )
}