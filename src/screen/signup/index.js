import React, {useState, useRef, useContext, useEffect} from 'react';
import {ImageBackground, View,Text, Image,ActivityIndicator,Modal, StatusBar,TouchableOpacity,ToastAndroid} from 'react-native';
import {style} from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../utils/colors';
import config from '../../server/config';
import BottamTab from '../../component/BottamTab';
import * as RNLocalize from "react-native-localize";
import PhoneInput from 'react-native-phone-number-input';
export default function Signup({navigation,route}) {
    const [phoneNumber, setPhoneNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  const phoneInput = useRef(null);
    const signup = async () =>{
   
    if (!phoneNumber.trim()) {
        ToastAndroid.show("Please enter mobile number",ToastAndroid.SHORT);
        return;
    }
    setShowModal(true)
    
    var formdata = new FormData();
    
    formdata.append("mobile_no", phoneNumber);
    formdata.append("act", "signup_otp");
    var requestOptions = {
        method: 'POST',
        body: formdata,
      };
      fetch(config.serverURL, requestOptions)
      .then(response => response.json())
        .then(responseJson =>{
            
            if(responseJson.status == 1){
                setShowModal(false)

                navigation.navigate('Otpverify',{'phone':phoneNumber,'path':'Signup'}) 
                ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);

            }else{
                setShowModal(false)

                navigation.navigate('Login') 
                ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
            }

      })

}
useEffect(() => {
    console.log(RNLocalize.getCountry());
   }, [navigation]);
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
                    <SafeAreaView style={{flex:1}}>
                        <View style={style.stylelogo}>
                            <Image style={style.imgStyle} source={require('../../Assets/logo/favicon.png')}/>
                            <Image style={style.imgStyle1} source={require('../../Assets/logo/plus602.png')}/> 
                        </View>
                        <View style={style.wrapp}>
                            <View style={style.headerstyle}>
                                <Text style={style.txtstyle1}>{'Create an account'}</Text>
                            </View>
                            <View style={style.field}>
                            <PhoneInput
                            ref={phoneInput}
                            placeholder={'Phone number'}
                            defaultValue={phoneNumber}
                           // defaultCode={RNLocalize.getCountry()}
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
                            
                                <TouchableOpacity onPress={()=>signup()} style={style.btn}>
                                    <Text style={style.txtstyle3}>{'Signup'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={()=>navigation.navigate('Onbording')} style={style.btnback}>
                                        <AntDesign name='arrowleft' size={moderateScale(25)} color={colors.Golden} />
                                </TouchableOpacity>
                                
                            </View>
                            
                            <TouchableOpacity  onPress={()=> navigation.navigate('T_C')}  style={style.t_c}>
                                <Text style={style.t_c_text}>{'I agree with your'}</Text>
                                <Text style={style.t_c_text1}>{'Privacy Policy'}</Text>
                                <Text style={style.t_c_text1}>{'Terms & Conditions'}</Text>
                            </TouchableOpacity>
                            

                        </View>
                       
                    </SafeAreaView>
        <BottamTab item={route} navigation={navigation} /> 

            </ImageBackground>
    )
}