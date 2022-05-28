import React, {useState, useRef, useContext, useEffect} from 'react';
import {ImageBackground, View,Text, Image, StatusBar,TouchableOpacity} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../server/config';
import BottamTab from '../../component/BottamTab';

export default function Dashboard({navigation,route}) {
      const [image, setimage] = useState(null);
      const [name, setname] = useState('');
    const [msg, setmsg] = useState('');
    const getdata = async () =>{
        const u_fullname =  await AsyncStorage.getItem('u_fullname');
        const u_img =  await AsyncStorage.getItem('u_img');
        setname(u_fullname);
        setimage(u_img);
    }
    const getHour = () => {
        const date = new Date();
        const hour = date.getHours()
        if( hour < 12 ){
            setmsg('Good Morning');
        }
        if( hour < 16 && hour > 12 ){
            setmsg('Good Afternoon');
        }
        if( hour > 16 ){
            setmsg('Good Evening');
        }
       }
    useEffect(() => {
        navigation.addListener('focus',()=>{
            getHour();
            getdata();
           })
        getdata();
        getHour();
          
    }, [navigation,route]);
    

    return(
        <View style={style.viewStyle}>
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor={colors.Golden} />
                    <SafeAreaView style={{backgroundColor:colors.Golden,flex:1}}>

                        <View style={style.stylelogo}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Ionicons name='menu' size={30} style={style.imgStyle2}/> 
                                <Image style={style.imgStyle1} source={require('../../Assets/logo/logo2.png')}/> 
                                <TouchableOpacity   onPress={()=> navigation.navigate('profilemenu',{'path':'HOME'})}  >
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
                            
                            <Text style={style.hdr}>Dashboard</Text>
                        </View>
                        <View style={style.card}>
                            <View style={style.cardheader}>
                                <Text style={style.cardtxt1}>{msg}, {name}</Text>
                                <Text style={style.cardtxt2}>May this {msg} belight, blesses, productive and happy for you.</Text>
                            </View>
                            <View style={style.stylerow}>
                           <View style={style.stylewrap}>
                                <TouchableOpacity onPress={()=>navigation.navigate('Connect')} style={style.box1}>
                                <FontAwesome5 name='handshake' size={30} style={{color:'black'}} />     
                                        <Text style={style.styletxt1}>{'CONNECT'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate('Humanbook')} style={style.box2}>
                                        <FontAwesome name='video-camera' size={30} style={{color:colors.Golden}} />     
                                        <Text style={style.styletxts2}> {'HUMAN BOOK'}</Text>
                                </TouchableOpacity>
                           </View>
                        </View>
                        <View style={style.stylerow}>
                           <View style={style.stylewrap}>
                                
                                <TouchableOpacity onPress={()=>navigation.navigate('Offer')} style={style.box2}>
                                <FontAwesome name='asl-interpreting' size={30} style={{color:colors.Golden}} />     

                                        <Text style={style.styletxts2}> {'I NEED / I OFFER'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate('Alert')} style={style.box1}>
                                <FontAwesome name='bell' size={30} style={{color:colors.black}} />     
                                        <Text style={style.styletxt1}>{'ALERTS'}</Text>
                                </TouchableOpacity>
                           </View>
                        </View>
                        <View style={style.stylerow}>
                           <View style={style.stylewrap}>
                                <TouchableOpacity onPress={()=>navigation.navigate('Programs')} style={style.box1}>
                                <FontAwesome name='calendar' size={30} style={{color:colors.black}} />     

                                        <Text style={style.styletxt1}>{'PROGRAMS'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>navigation.navigate('Coupons')} style={style.box2}>
                                <FontAwesome5 name='percentage' size={30} style={{color:colors.Golden}} />     
                                        <Text style={style.styletxts2}> {'COUPONS & ADS'}</Text>
                                </TouchableOpacity>
                           </View>
                        </View>
                            
                        </View>
                        
                        
                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 
        </View>
    )
}