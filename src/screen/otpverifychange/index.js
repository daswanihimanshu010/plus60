import React, {useState, useEffect,useRef} from 'react';
import { View,Text, Image, StatusBar,TextInput,ToastAndroid} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottamTab from '../../component/BottamTab';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import PhoneInput from 'react-native-phone-number-input';
import config from '../../server/config';
export default function Humanbookcreate({navigation,route}) {
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
    const [image, setimage] = useState(null);
    const getdatauser = async () =>{
        const u_img =  await AsyncStorage.getItem('u_img');
        setimage(u_img);
    }
   
    useEffect(() => {
      getdatauser();  
     }, [navigation]);
    return(
        <View style={style.viewStyle}>
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor={colors.Golden} />
                    <SafeAreaView style={{backgroundColor:colors.Golden,flex:1}}>

                        <View style={style.stylelogo}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <TouchableOpacity  onPress={()=> navigation.goBack()} >
                                <AntDesign name='arrowleft' color={colors.Charcole}  size={moderateScale(25)} />
                            </TouchableOpacity>
                                <Image style={style.imgStyle1} source={require('../../Assets/logo/logo2.png')}/> 
                                { image != null ? (
                                        <Image style={style.imgStyle3} 
                                            source={{uri: config.fileserver+image}}
                                        /> 
                                    ): (
                                        <Image style={style.imgStyle3} source={require('../../Assets/icon/avtar.png')}/> 
                                    )
                                    }
                            </View>
                            <View style={style.logout}>
                            <Text style={style.hdr}>{'OTP verification'}</Text>
                           
                            </View>
                        </View>
                        <View style={style.card}>
                          <ScrollView>
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
                                        <Text style={style.txtstyle3}>{'Verify & Change number'}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  onPress={()=>navigation.goBack()} style={style.btnback}>
                                        <AntDesign name='arrowleft' size={moderateScale(25)} color={colors.Golden} />
                                    </TouchableOpacity>
                                
                            </View>
                          </ScrollView>
                        </View>
                       
                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 

        </View>
    )
}