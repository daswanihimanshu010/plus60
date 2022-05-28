import React, {useState, useRef, useContext, useEffect} from 'react';
import {ScrollView, View,Text, Image, StatusBar,FlatList,TouchableOpacity} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moderateScale } from 'react-native-size-matters';
import BottamTab from '../../component/BottamTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../server/config';
export default function About({navigation,route}) {
    const [image, setimage] = useState(null);
    const [data, setdata] = useState([]);
  const getdata = async () =>{
      const u_img =  await AsyncStorage.getItem('u_img');
      const u_id = route.params.item.member_id;
      setimage(u_img);

            var formdata = new FormData();
            formdata.append("act", "hb_member");
            formdata.append("member_id", u_id);
            var requestOptions = {
            method: 'POST',
            body: formdata,
            };
            fetch(config.serverURL, requestOptions)
            .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    setdata(responseJson.data);
                }else{
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
            })

  }
  useEffect(() => {
   
    getdata();
      
})

    return(
        <View style={style.viewStyle}>
            {/* <ImageBackground source={require('../../Assets/logo/background.png')} style={style.backgroundImage} > */}
                <StatusBar  hidden = {false}  translucent = {true}  backgroundColor={colors.Golden} />
                    <SafeAreaView style={{backgroundColor:colors.Golden,flex:1}}>

                        <View style={style.stylelogo}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Ionicons name='menu' size={30} style={style.imgStyle2}/> 
                                <Image style={style.imgStyle1} source={require('../../Assets/logo/logo2.png')}/> 
                                <TouchableOpacity   onPress={()=> navigation.navigate('profilemenu')}  >
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
                            
                            <Text style={style.hdr}>DASHBOARD</Text>
                        </View>
                        <View style={style.card}>
                            <View style={style.cardlist}>
                                <ScrollView>
                                    <View style={style.imgsec}>
                                        <TouchableOpacity onPress={()=>navigation.navigate(route.params.path) }>
                                            <AntDesign name='arrowleft' size={moderateScale(25)} />
                                        </TouchableOpacity>
                                        <View style={{alignSelf:'center'}}>
                                            <View style={style.memberimg}>
                                                <Image style={style.imgStylemember} 
                                                    source={{uri: config.fileserver+route.params.item.member_img}}
                                                /> 
                                            </View>
                                            <Text style={style.txt1}>{route.params.item.member_name}</Text>
                                            <Text style={style.txt2}>{route.params.item.member_mob}</Text>
                                        </View>
                                        
                                    </View> 
                                    <View style={style.aboutsec}>
                                        <Text style={style.aboutheader}>ABOUT ME</Text>
                                        <Text style={style.aboutdec}>{'Inclined towards art and creativity, contributearticles to the print media, love shero shayriand poetry actively participate in book club,seniors got Talent, story telling in a minuteopen mic etc.'}</Text>
                                    </View>
                                    <View style={style.aboutsec}>
                                        <Text style={style.aboutheader}>HUMAN BOOK</Text>

                                            <FlatList
                                            horizontal={true}
                                            data={data}
                                            listKey={item => item.toString()}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={({item, index}) => (
                                            <TouchableOpacity  onPress={()=> navigation.navigate('Humanbookdetails',{item})} style={style.hbcard}>
                                                <Image style={style.imgStylemember} source={{uri: config.fileserver+item.hb_file_name}} /> 
                                            </TouchableOpacity>
                                        )}
                                        />



                                    </View>
                                                                       
                                </ScrollView>
                            </View>
                        </View>
                       
                       
                    </SafeAreaView>
                    <BottamTab item={route} navigation={navigation} /> 

        </View>
    )
}