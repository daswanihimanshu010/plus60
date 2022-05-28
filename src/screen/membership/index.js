import React, {useState, useRef, useContext, useEffect} from 'react';
import {ImageBackground, View,Text, Image,ScrollView , StatusBar,TouchableOpacity,FlatList,ToastAndroid} from 'react-native';
import {style} from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../server/config';

export default function Membership({navigation}) {
    const [list, setlist] = useState([]);

    const plan = async () =>{
        const uid =await  AsyncStorage.getItem("u_id");
       
        var formdata = new FormData();

        formdata.append("act", "membership_plans");
        formdata.append("user_id", uid);
        var requestOptions = {
            method: 'POST',
            body: formdata,
            };
            fetch(config.serverURL, requestOptions)
            .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                   // ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                    AsyncStorage.setItem('is_member',String(responseJson.data.is_membership));
                    navigation.navigate('HOME')
                }
            })
  }
    const getdata = async () =>{
       
        var formdata = new FormData();

        formdata.append("act", "subscribeplan");
        var requestOptions = {
            method: 'POST',
            body: formdata,
            };
            fetch(config.serverURL, requestOptions)
            .then(response => response.json())
            .then(responseJson =>{
                if(responseJson.status == 1){
                    let arr1 = responseJson.data.map((item,index)=>{
                        item.isselected = false;
                          return {...item};
                    })
                    setlist(arr1);
                }else{
                    ToastAndroid.show(responseJson.msg,ToastAndroid.SHORT);
                }
            })
  }
  useEffect(() => {
   getdata();
}, [navigation]);

    
    
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
                                <Text style={style.txtstyle1}>{'Membership plan'}</Text>
                            </View>
                            <ScrollView>

                            <View style={style.field}>
                                <View style={style.card}>
                                <FlatList
                            data={list}
                            listKey={item => item.toString()}
                           
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, index}) => (
                                    <TouchableOpacity disabled={true} style={[style.wrp,{backgroundColor: item.isselected ? colors.Golden : colors.card1}]}>
                                        <View style={style.wrp1}>
                                            <Text style={style.cardtxtstyle1}>{item.name}</Text>
                                            <Text style={style.cardtxtstyle2}>{item.description}</Text>
                                        </View>
                                        <View style={style.wrp2}>
                                            <Text style={style.cardtxtstyle1}>{'Rs.'}{item.price}</Text>
                                            <Text style={style.cardtxtstyle3}>{item.duration}{'Days'}</Text>
                                        </View>
                                    </TouchableOpacity>
                                   )}
                                   /> 
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>plan()} style={style.wlcom}>
                                <Text style={style.wlcomtxt}>Welcome To Plus 60! Let's Get Going!</Text>
                            </TouchableOpacity>
                            </ScrollView>
                           
                        </View>
                    </SafeAreaView>
            </ImageBackground>
        </View>
    )
}