import React, {useState, useRef, useContext, useEffect} from 'react';
import {ImageBackground, View,Text, Image,TextInput, StatusBar,TouchableOpacity,ToastAndroid} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moderateScale } from 'react-native-size-matters';
import config from '../../server/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from "react-native-localize";
import BottamTab from '../../component/BottamTab';
import PhoneInput from 'react-native-phone-number-input';
export default function Login({navigation,route}) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberold, setPhoneNumberold] = useState('');
    const phoneInput = useRef(null);
    const chklogin = async () =>{
        const u_mo =await  AsyncStorage.getItem("u_mo");
        setPhoneNumberold(u_mo);
    }


    useEffect(() => {
        chklogin();
    })
    const submit = async () =>{
         
        const u_mo =await  AsyncStorage.getItem("u_mo");
            console.log('ijhi',u_mo)

       
        if (!phoneNumber.trim()) {
            ToastAndroid.show("Please enter mobile number",ToastAndroid.SHORT);
            return;
        }
          
          var formdata = new FormData();
          formdata.append("mobile_no", u_mo);
            formdata.append("act", "login_otp");
            var requestOptions = {
                method: 'POST',
                body: formdata,
            };
      fetch(config.serverURL, requestOptions)
      .then(response => response.json())
        .then(responseJson =>{
            console.log('ijhi',u_mo)
            if(responseJson.status == 1){
                    navigation.navigate('Otpverifychange',{'old':u_mo,'new':phoneNumber}) 
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
            }

      })

        
    }
    
    return(
        <View style={style.viewStyle}>
            <ImageBackground source={require('../../Assets/logo/background.png')} style={style.backgroundImage} >
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor="transparent" />
                    <SafeAreaView>
                        <View style={style.stylelogo}>
                            <Image style={style.imgStyle} source={require('../../Assets/logo/favicon.png')}/>
                            <Image style={style.imgStyle1} source={require('../../Assets/logo/plus602.png')}/> 
                        </View>
                        <View style={style.wrapp}>
                            <View style={style.headerstyle}>
                                <Text style={style.txtstyle1}>{'Change Number'}</Text>
                            </View>
                            <View style={style.field}>
                            <Text style={style.txtstyle11}>{phoneNumberold}</Text>

                            <PhoneInput
                            ref={phoneInput}
                            defaultValue={phoneNumber}
                            placeholder={'New Number'}
                            defaultCode={'IN'}
                            layout="second"
                            withShadow
                            autoFocus
                            containerStyle={style.phoneNumberView}
                            textContainerStyle={{ paddingVertical: 0 }}
                            onChangeFormattedText={text => {
                            setPhoneNumber(text);
                            }}
                            />
                                <TouchableOpacity
                                 onPress={()=>submit()} style={style.btn}>
                                        <Text style={style.txtstyle3}>{'Submit'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={()=>navigation.navigate('profilemenu')} style={style.btnback}>
                                        <AntDesign name='arrowleft' size={moderateScale(25)} color={colors.Golden} />
                                </TouchableOpacity>
                            </View>
                            
                           
                            

                        </View>
                    </SafeAreaView>

            </ImageBackground>
            <BottamTab item={route} navigation={navigation} /> 

        </View>
    )
}