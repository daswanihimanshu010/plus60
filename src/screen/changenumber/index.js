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
import PhoneInput from 'react-native-phone-number-input';
import config from '../../server/config';
export default function Humanbookcreate({navigation,route}) {
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
  const [path, setpath] = useState(route.params == undefined ? 'HOME' :  route.params.path);
  const [image, setimage] = useState(null);
  const getdatauser = async () =>{
      const u_img =  await AsyncStorage.getItem('u_img');
      setimage(u_img);
  }
 
  useEffect(() => {
    console.log('route.params',route.params)
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
                            <Text style={style.hdr}>{'Change Number'}</Text>
                           
                            </View>
                        </View>
                        <View style={style.card}>
                          <ScrollView>
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