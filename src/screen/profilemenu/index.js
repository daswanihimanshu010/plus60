import React, {useState, useEffect} from 'react';
import { View,Text, Image, StatusBar,TextInput,ToastAndroid} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottamTab from '../../component/BottamTab';
import config from '../../server/config';
export default function Humanbookcreate({navigation,route}) {
  const [path, setpath] = useState(route.params == undefined ? 'HOME' :  route.params.path);
  const [image, setimage] = useState(null);
  const getdatauser = async () =>{
      const u_img =  await AsyncStorage.getItem('u_img');
      setimage(u_img);
  }
  const logout = async () =>{
    const uid =await  AsyncStorage.getItem("u_id");
        var formdata = new FormData();
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
    await AsyncStorage.removeItem('u_id'); 
    navigation.navigate('Onbording');
    ToastAndroid.show('logout successfully!',ToastAndroid.SHORT);
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
                            <TouchableOpacity  onPress={()=> navigation.navigate(path)} >
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
                            <Text style={style.hdr}>{'Settings'}</Text>
                           
                            </View>
                        </View>
                        <View style={style.card}>
                          <ScrollView>
                              <TouchableOpacity 
                                onPress={()=> navigation.navigate('updateprofile')}
                                style={[style.cardmenu,{marginTop:moderateScale(45)}]}>
                                <Text style={style.menutext}>{'Profile'}</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={style.cardmenu}>
                                <Text style={style.menutext}>{'Membership'}</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={style.cardmenu}>
                                <Text style={style.menutext}>{'ID card'}</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={style.cardmenu}>
                                <Text style={style.menutext}>{'Transactions'}</Text>
                              </TouchableOpacity>
                              <TouchableOpacity 
                                onPress={()=> navigation.navigate('changenumber')}
                                style={style.cardmenu}>
                                <Text style={style.menutext}>{'Change number'}</Text>
                              </TouchableOpacity>
                              <TouchableOpacity 
                                onPress={()=>logout()}
                                style={style.cardmenu}>
                                <Text style={style.menutext}>{'Logout'}</Text>
                              </TouchableOpacity>
                          </ScrollView>
                        </View>
                       
                        
                       
                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 

        </View>
    )
}