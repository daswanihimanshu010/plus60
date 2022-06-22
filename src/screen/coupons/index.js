import React, {useState, useRef, useContext, useEffect} from 'react';
import {ImageBackground, View,Text, Image, StatusBar,TouchableOpacity,FlatList,Modal,Linking,ToastAndroid,Button} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import config from '../../server/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { moderateScale } from 'react-native-size-matters';
import BottamTab from '../../component/BottamTab';
import {Clipboard} from 'react-native';
export default function Coupons({navigation,route}) {
    const [showModalmsg, setShowModalmsg] = useState(false);
    const [msg, setmsg] = useState('While you leverage some discounts, let us know specific discounts you are looking for. We shall try to get them for you!');
    
    const [list, setlist] = useState([]);
    const [coupnedata, setcoupnedata] = useState([]);
    const [image, setimage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const getdatauser = async () =>{
        const u_img =  await AsyncStorage.getItem('u_img');
        setimage(u_img);
    }
    const clipboardcode = async () =>{
        Clipboard.setString(coupnedata.coupon_code);
        ToastAndroid.show('copied!',ToastAndroid.SHORT);
    }
        const getdata = async () =>{
       
        var formdata = new FormData();
  

  formdata.append("act", "coupons");
  var requestOptions = {
      method: 'POST',
      body: formdata,
    };
    fetch(config.serverURL, requestOptions)
    .then(response => response.json())
      .then(responseJson =>{
          if(responseJson.status == 1){
        
            setlist(responseJson.data);
          }else{
              ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
          }

    })

      
  }
  useEffect(() => {
   getdata();
   getdatauser();
},[])

    return(
        <View style={style.viewStyle}>
             <Modal
         transparent={true}
         visible={showModalmsg}
         animationType={'slide'}
          animationIn="slideInLeft"
    
         >
       
         <View  style={style.modal}>
            <View  style={style.modalInner1}>
                <Text style={[style.modalsubtitle,{marginBottom:moderateScale(10)}]}>{msg}</Text>
                <Button color={colors.Golden}            
                title='OK'
                onPress={()=>setShowModalmsg(!showModalmsg)}
                />
            </View>
         </View>

       </Modal>
            <Modal
         transparent={true}
         visible={showModal}
         animationType={'slide'}
          animationIn="slideInLeft"
    
         >
       
         <View  style={style.modal}>
            <View  style={style.modalInner}>
                <View style={style.modelheader}>
                    <TouchableOpacity onPress={()=> setShowModal(!showModal)} style={{alignItems:'flex-end',width:'100%',padding:moderateScale(8)}}>
                        <Entypo name='cross' color={colors.Charcole} size={moderateScale(20)} />
                    </TouchableOpacity>
                    <View style={{width:'100%',flexDirection:'row',paddingHorizontal:moderateScale(20),paddingBottom:moderateScale(20)}}>
                        <View style={style.modalimg}></View>
                        <View style={style.modaltitle}>
                            <Text style={style.modaltxt1}>{coupnedata.coupon_name}</Text>
                            <Text style={style.modaltxt2}>{coupnedata.coupon_desc}</Text>

                        </View>
                    </View>
                    
                </View>
                <View style={style.modelsec}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:colors.red,paddingHorizontal:moderateScale(10),paddingVertical:moderateScale(2)}}>
                            <Text style={style.ctxt1}>{coupnedata.coupon_code}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>clipboardcode()} style={{justifyContent:'center',alignItems:'center',backgroundColor:colors.red,paddingHorizontal:moderateScale(10),paddingVertical:moderateScale(2)}}>
                            <Text style={style.ctxt2}>{'COPY CODE'}</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{flexDirection:'row',paddingVertical:moderateScale(8)}}>
                        <TouchableOpacity  onPress={() => Linking.openURL(coupnedata.ad_url)}>
                        <Text style={style.linktxt}>{'Visit '}{coupnedata.coupon_name}</Text>
                        </TouchableOpacity>
                        <Text style={style.linktxt1}>{' and past your code at checkout'}</Text>
                    </View>
                    <View style={{paddingTop:moderateScale(12)}}>
                        
                        <Text>{'Valid till: '}{ coupnedata.coupon_exp}</Text>
                    </View>
                </View>

            </View>
         </View>

       </Modal>
            {/* <ImageBackground source={require('../../Assets/logo/background.png')} style={style.backgroundImage} > */}
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor={colors.Golden} />
                    <SafeAreaView style={{backgroundColor:colors.Golden,flex:1}}>

                        <View style={style.stylelogo}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <TouchableOpacity  onPress={()=> navigation.navigate('HOME')} >
                                    <AntDesign name='arrowleft' color={colors.Charcole}  size={moderateScale(25)} />
                                </TouchableOpacity>
                                <Image style={style.imgStyle1} source={require('../../Assets/logo/logo2.png')}/> 
                                <TouchableOpacity   onPress={()=> navigation.navigate('profilemenu',{'path':'Coupons'})}  >
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
                            <View style={{flexDirection:'row',justifyContent:"space-between",marginVertical:moderateScale(10)}}>
                                <Text style={style.hdr}>{'COUPONS/OFFERS'}</Text>
                                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>setShowModalmsg(!showModalmsg)} >
                                        <AntDesign name='questioncircle' size={20} style={style.iconf} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={style.card}>
                        {/* <View style={style.cardheaderblb}>
                                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>setShowModalmsg(!showModalmsg)} >
                                    <AntDesign name='questioncircle' size={20} style={style.iconf} />
                                </TouchableOpacity>
                            </View> */}
                            <View style={style.cardheader}>
                                    {/* <Ionicons name='md-add' size={30} style={{alignSelf:'flex-end'}} />  */}
                            </View>
                            <FlatList
                            style={{marginBottom:moderateScale(170)}}

                            data={list}
                            listKey={item => item.toString()}
                           
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, index}) => (
                                <View> 
                                    { item.coupon_type == 'coupon' ? (
                                    <View style={style.cardlist}>
                                <View style={style.card1}>
                                    <Text style={style.txt1}>{item.coupon_name}</Text>
                                    <Text style={style.txt2}>{item.coupon_desc}</Text>

                                </View>
                                <View style={style.card2}>
                                    <Text style={style.txt3}>{'Use By:'}</Text>
                                    <Text style={[style.txt4]}>{item.coupon_exp}</Text>
                                    <Text style={style.txt3}>{item.coupon_desc}</Text>
                                    <TouchableOpacity onPress={()=>{ setcoupnedata(item);
                                        setShowModal(!showModal)
                                    }} style={style.btn}>
                                        <Text style={style.btntxt}>{'REEDEM'}</Text>
                                    </TouchableOpacity>

                                </View>
                                
                            </View>
                                 ) : (
                                <View style={style.cardlistads}>
                                    <ImageBackground   source={{uri: config.fileserver+item.coupon_img}}style={{flexDirection:'row',height:'100%',width:'100%',resizeMode:'contain',backgroundColor:colors.blue}}>
                                    <View style={style.card11}>
                                        <Text style={style.txt11}>{item.coupon_name}</Text>
                                    </View>
                                    <View style={style.card21}>
                                    <Text style={[style.txt12]}>{item.coupon_name}</Text>
                                    <TouchableOpacity onPress={() => Linking.openURL(item.ad_url)} style={style.btn}>
                                        <Text style={style.btntxt}>{'GET YOUR SEAT'}</Text>
                                    </TouchableOpacity>

                                </View>  
                                    </ImageBackground>
                                </View>
                                  ) } 

                                  </View>
                            )}
                            />
                        </View>
                    </SafeAreaView>
            <BottamTab item={route} navigation={navigation} /> 
        </View>
    )
}