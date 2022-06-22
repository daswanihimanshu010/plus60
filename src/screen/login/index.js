import React, {useState, useRef, useContext, useEffect} from 'react';
import {ImageBackground, View,Text, Image,ScrollView,ActivityIndicator, StatusBar,TouchableOpacity,ToastAndroid,Modal,Button} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import config from '../../server/config';
import BottamTab from '../../component/BottamTab';
import * as RNLocalize from "react-native-localize";
import PhoneInput from 'react-native-phone-number-input';
import { moderateScale } from 'react-native-size-matters';
import colors from '../../utils/colors';
export default function Login({navigation,route}) {
    const [phoneNumber, setPhoneNumber] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

    const phoneInput = useRef(null);

    const login = async () =>{
       
        if (!phoneNumber.trim()) {
            ToastAndroid.show("Please enter mobile number",ToastAndroid.SHORT);
            return;
        }
        setShowModal(true)
            var formdata = new FormData();
            formdata.append("mobile_no", phoneNumber);
            formdata.append("act", "login_otp");
            var requestOptions = {
                method: 'POST',
                body: formdata,
            };
      fetch(config.serverURL, requestOptions)
      .then(response => response.json())
        .then(responseJson =>{
            if(responseJson.status == 1){
                    setShowModal(false)
                    navigation.navigate('Otpverify',{'phone':phoneNumber,'path':'Login'}) 
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);

            }else{
                setShowModal(false)
                setShowModal1(true)
                // navigation.navigate('Signup') 
                // ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT); 
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
        <Modal
         transparent={true}
         visible={showModal1}
         animationType={'slide'}
          animationIn="slideInLeft"
    
         >
       
         <View  style={{backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,}}>
            <View  style={{
              width: moderateScale(320),
              backgroundColor: 'white',
              borderRadius: moderateScale(4),
              borderColor: 'rgba(0, 0, 0, 0.1)',
              overflow:'hidden',
              paddingHorizontal:moderateScale(12),
              paddingVertical:moderateScale(14),
            }}>
                <Text style={[{ fontSize:moderateScale(14),
                                color:colors.Charcole,
                                fontWeight:'400',
                                alignSelf:'center',
                                marginVertical:moderateScale(10)}]}>{'Mobile number not found please signup first!'}</Text>
                {/* <Button color={colors.Golden}            
                title='OK'
                onPress={()=>setShowModal1(!showModal1)}
                /> */}
            <TouchableOpacity onPress={()=>setShowModal1(!showModal1)}>
                <Text style={{backgroundColor:colors.Golden,paddingVertical:moderateScale(5),paddingHorizontal:moderateScale(12),alignSelf:'center',color:colors.Charcole,fontSize:moderateScale(12),fontWeight:'bold'}}>Ok</Text>
            </TouchableOpacity>

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
                                <Text style={style.txtstyle1}>{'Account login'}</Text>
                            </View>
                            <ScrollView style={{marginTop:moderateScale(25)}}>
                            <View style={style.field}>
                                <PhoneInput
                                    ref={phoneInput}
                            placeholder={'Phone number'}
                            defaultValue={phoneNumber}
                                    //  defaultCode={RNLocalize.getCountry()}
                                    defaultCode='IN'
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
                                 onPress={()=>login()} style={style.btn}>
                                        <Text style={style.txtstyle3}>{'Login'}</Text>
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
                            </ScrollView>
                          
                        </View>
                    </SafeAreaView>
                <BottamTab item={route} navigation={navigation} /> 

            </ImageBackground>
    )
}