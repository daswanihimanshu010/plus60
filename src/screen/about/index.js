import React, {useState, useRef, useContext, useEffect} from 'react';
import {ScrollView, View,Text, Image, StatusBar,FlatList,TouchableOpacity} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottamTab from '../../component/BottamTab';
import { moderateScale } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../server/config';
export default function About({navigation,route}) {
    const [image, setimage] = useState(null);
  const getdata = async () =>{
      const u_img =  await AsyncStorage.getItem('u_img');
      setimage(u_img);
  }
  useEffect(() => {
    navigation.addListener('focus',()=>{
        getdata();

       })
    getdata();
      
})

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
                                <TouchableOpacity   onPress={()=> navigation.navigate('profilemenu',{'path':'About'})}  >

                                { image != null ? (
                                        <Image style={style.imgStyle3} 
                                            source={{uri: config.fileserver+image}}
                                        /> 
                                    ): (
                                        <Image style={style.imgStyle3} source={require('../../Assets/icon/avtar.png')}/> 
                                    )
                                    }
                                </TouchableOpacity>
                            </View>
                            
                            <Text style={style.hdr}>About</Text>
                        </View>
                        <View style={style.card}>
                          
                           
                            <View style={style.cardlist}>
                                <ScrollView>
                                
                                <View style={style.cardtxt}>
                                <Text style={style.cardtxtstyle1} >{'What is Plus60?'}</Text>
                                    <Text style={style.cardtxtstyle2} >{'A mobile app for elderly who are sixty years and above. The app is a platform for them to engage, entertain, express and enjoy life for themselves.'}</Text>
                                </View>
                                <View style={style.cardtxt}>
                                    <Text style={style.cardtxtstyle1} >{'What is inside Plus60?'}</Text>
                                    <Text style={style.cardtxtstyle2} >Firstly, the app is meant for those who are minimum 60 years of age. Once registered, members get to CONNECT with like minded members and build their own network.
 There are PROGRAMS of engagement including offline and online entertainment like excursions, gatherings, plays, concerts, speeches of eminent personalities on health, 
medicine & spirituality, compeititons, games etc. Members also get to express their life learning through HUMANBOOK or know from fellow members' videos.
 I NEED / I OFFER enables members to find engagement opportunities or seek help from others. There are ALERTS, COUPONS for gifts etc. as well.</Text>
                                </View>
                                <TouchableOpacity  onPress={()=> navigation.navigate('T_C')} style={style.cardtxt}>
                                <Text style={style.cardtxtstyle1} >{'How do I register as a member?'}</Text>
                                    <Text style={style.cardtxtstyle2}>Simply through your mobile number! Once you download the app PLUS60, go to REGISTER. You will be asked your mobile number and receive One Time Password for registration.
 Once inside the app, complete the profile and you are ready!
                                   
                                    <Text style={{textDecorationLine: 'underline',color:'#145ED8'}}> Make sure that you read and accept Terms & Conditions.</Text>
                                
                                 </Text>
                                </TouchableOpacity>
                                <View style={style.cardtxt}>
                                    <Text style={style.cardtxtstyle1} >{'Is it FREE?'}</Text>
                                    <Text style={style.cardtxtstyle2} >There are 3 types of memberships. Trial membership is FREE and available for 30 days. Members can choose to upgrade to Monthly Membership or Annual Membership at 
Rs. 100 per month or Rs. 1000 per year respectively.</Text>
                                </View>
                                <View style={style.cardtxt}>
                                    <Text style={style.cardtxtstyle1} >{'How is Plus60 different from other social media platforms?'}</Text>
                                    <Text style={style.cardtxtstyle2} >Great question! Beyond 60 years of age or typically after completing work responsibilities, elderly need their own space too. While their kids and next of kins are busy
 living their own lives, elderly find it challenging to expect time share from them. Moreover, other social media platforms do not address issues specific to the elderly 
and are overwhelming. Hence Plus60 - to make the elderly live for themselves. </Text>
                                </View>
                                <TouchableOpacity 
                                    onPress={()=> navigation.navigate('T_C')} style={style.cardtxt}>
                                    <Text style={style.cardtxtstyle1} >{'What is your Privacy Policy?'}</Text>
                                    <Text style={[style.cardtxtstyle2,{textDecorationLine: 'underline',color:'#145ED8'}]} >{'Terms of Service  and Privacy Policy'}</Text>
                                </TouchableOpacity>
                                <View style={style.cardtxt}>
                                    <Text style={style.cardtxtstyle1} >{'What are payment options available on Plus60?'}</Text>
                                    <Text style={style.cardtxtstyle2} >Members are required to make online transactions only when absolutely necessary. Like, to upgrade membership, they will have to pay the membership charges online or make
 the payment by sharing the payment link to their kids and kins who will pay on member's behalf. All usual payment gateways are made available to members. 
In most of other cases, we are trying to give members options to pay at the venue or location wherever possible to avoid online payment.</Text>
                                </View>
                                <View style={style.cardtxt}>
                                    <Text style={style.cardtxtstyle1} >{'Is it available in Android as well as IOS?'}</Text>
                                    <Text style={style.cardtxtstyle2} >{'Yes it is available in both types of mobile operating systems.'}</Text>
                                </View>
                                <View style={style.cardtxt}>
                                    <Text style={style.cardtxtstyle1} >{'How to contact PLUS60 customer support?'}</Text>
                                    <Text style={style.cardtxtstyle2} >{'Whatsapp number - | Email - help@plus60.co | Phone number - 9850929997'}</Text>
                                </View>
                                <View style={[style.cardtxt,{marginBottom:moderateScale(150)}]}>
                                    <Text style={style.cardtxtstyle1} >{'Where is PLUS60 based out of?'}</Text>
                                    <Text style={style.cardtxtstyle2} >{'Postal Address - Farak Busilink Pvt. Ltd., 4 Ashasmriti, Lane Number 10, Paramhansa Nagar, Paud Road, Pune - 411 038 INDIA'}</Text>
                                </View>
                                </ScrollView>
                            </View>
                           
                             
                        </View>
                       
                       
                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 
        </View>
    )
}